import { spawnSync } from "node:child_process";

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

if (actionableOutdated.length > 0) {
  console.error("Outdated dependencies detected:");
  for (const [name, info] of actionableOutdated) {
    console.error(`- ${name}: ${info.current} -> ${info.latest}`);
  }
}

if (vulnerabilities > 0) {
  console.error(`Security vulnerabilities detected: ${vulnerabilities}`);
}

if (actionableOutdated.length > 0 || vulnerabilities > 0) {
  globalThis.process.exit(1);
}

console.log("Dependencies are up to date and no vulnerabilities were found.");
