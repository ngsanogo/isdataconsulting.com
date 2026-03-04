import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

function runNpm(args, acceptedExitCodes) {
  const result = spawnSync("npm", args, { encoding: "utf8" });
  if (!acceptedExitCodes.includes(result.status ?? 1)) {
    const stderr = result.stderr?.trim();
    const stdout = result.stdout?.trim();
    console.error(stderr || stdout || `npm ${args.join(" ")} failed`);
    globalThis.process.exit(1);
  }
  return result.stdout?.trim() || "";
}

function parseJsonOrEmpty(value) {
  if (!value) {
    return {};
  }
  try {
    return JSON.parse(value);
  } catch {
    console.error("Failed to parse JSON output.");
    globalThis.process.exit(1);
  }
}

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function majorFromVersion(versionRange) {
  const match = String(versionRange || "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

function checkEslintReactHooksCompatibility() {
  const rootPackage = readJson(join(globalThis.process.cwd(), "package.json"));
  const hooksPackage = readJson(
    join(globalThis.process.cwd(), "node_modules", "eslint-plugin-react-hooks", "package.json")
  );

  const eslintVersionRange = rootPackage?.devDependencies?.eslint || rootPackage?.dependencies?.eslint;
  const eslintMajor = majorFromVersion(eslintVersionRange);
  const hooksVersion = hooksPackage?.version;
  const hooksPeerRange = hooksPackage?.peerDependencies?.eslint;

  if (!eslintMajor || !hooksVersion || !hooksPeerRange) {
    return [];
  }

  const errors = [];

  // Known incompatible canary with eslint@10+.
  if (eslintMajor >= 10 && hooksVersion === "7.1.0-canary-52684925-20251110") {
    errors.push(
      `eslint-plugin-react-hooks@${hooksVersion} is incompatible with eslint@${eslintVersionRange} (peer: ${hooksPeerRange}).`
    );
  }

  // Generic safety net: peer range does not advertise eslint 10+ support.
  if (
    eslintMajor >= 10 &&
    !/(\^10\.|>=\s*10\.|\b10\s*\|\||\b10\.x|\b11\.|>=\s*11\.)/.test(String(hooksPeerRange))
  ) {
    errors.push(
      `eslint-plugin-react-hooks peer range (${hooksPeerRange}) does not explicitly support eslint ${eslintMajor}.`
    );
  }

  return errors;
}

const outdatedRaw = runNpm(["outdated", "--json"], [0, 1]);
const outdated = parseJsonOrEmpty(outdatedRaw);

const unsupportedLatestTag = new Set(["eslint-plugin-react-hooks"]);
const actionableOutdated = Object.entries(outdated).filter(([name, info]) => {
  const current = String(info.current || "");
  const latest = String(info.latest || "");
  if (!latest || current === latest) {
    return false;
  }
  if (unsupportedLatestTag.has(name) && current.includes("canary")) {
    return false;
  }
  return true;
});

const auditRaw = runNpm(["audit", "--json", "--audit-level=low"], [0, 1]);
const audit = parseJsonOrEmpty(auditRaw);
const vulnerabilities = Number(audit?.metadata?.vulnerabilities?.total || 0);
const compatibilityErrors = checkEslintReactHooksCompatibility();

if (actionableOutdated.length > 0) {
  console.error("Outdated dependencies detected:");
  for (const [name, info] of actionableOutdated) {
    console.error(`- ${name}: ${info.current} -> ${info.latest}`);
  }
}

if (vulnerabilities > 0) {
  console.error(`Security vulnerabilities detected: ${vulnerabilities}`);
}

if (compatibilityErrors.length > 0) {
  console.error("Dependency compatibility issues detected:");
  for (const error of compatibilityErrors) {
    console.error(`- ${error}`);
  }
  console.error(
    "Action: keep eslint-plugin-react-hooks pinned to a version compatible with your eslint major."
  );
}

if (actionableOutdated.length > 0 || vulnerabilities > 0 || compatibilityErrors.length > 0) {
  globalThis.process.exit(1);
}

console.log("Dependencies are up to date and no vulnerabilities were found.");
