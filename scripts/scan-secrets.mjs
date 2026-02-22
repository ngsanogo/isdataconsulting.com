import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";

const patterns = [
  { name: "AWS access key", regex: /AKIA[0-9A-Z]{16}/g },
  { name: "GitHub PAT", regex: /(ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})/g },
  { name: "Slack token", regex: /xox[baprs]-[A-Za-z0-9-]{10,}/g },
  { name: "Google API key", regex: /AIza[0-9A-Za-z\-_]{35}/g },
  { name: "Private key block", regex: /-----BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY-----/g },
  { name: "Stripe live key", regex: /sk_live_[0-9a-zA-Z]{16,}/g },
];

const ignoreFiles = [
  /^\.git\//,
  /^\.github\//,
  /^\.devcontainer\//,
  /^coverage\//,
  /^dist\//,
  /^target\//,
  /^\.cache\//,
  /^\.npm\//,
  /^node_modules\//,
  /^LICENSE$/,
];

function shouldIgnore(file) {
  return ignoreFiles.some((rule) => rule.test(file));
}

function listFilesWithGit() {
  try {
    return execSync("git ls-files", { encoding: "utf8" })
      .split("\n")
      .map((entry) => entry.trim())
      .filter(Boolean);
  } catch {
    return null;
  }
}

function listFilesWithoutGit(directory = ".") {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = directory === "." ? entry.name : `${directory}/${entry.name}`;
    if (shouldIgnore(fullPath)) {
      continue;
    }
    if (entry.isDirectory()) {
      files.push(...listFilesWithoutGit(fullPath));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

const tracked = (listFilesWithGit() ?? listFilesWithoutGit()).filter(
  (file) => !shouldIgnore(file),
);

const findings = [];

for (const file of tracked) {
  if (!existsSync(file)) {
    continue;
  }
  const content = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    const matches = content.match(pattern.regex);
    if (matches && matches.length > 0) {
      findings.push({ file, pattern: pattern.name, count: matches.length });
    }
  }
}

if (findings.length > 0) {
  console.error("Potential secrets detected:");
  for (const finding of findings) {
    console.error(`- ${finding.file}: ${finding.pattern} (${finding.count})`);
  }
  globalThis.process.exit(1);
}

console.log("No secret patterns detected in tracked files.");
