const baseUrl = globalThis.process.argv[2] ?? "http://prod:8080";

const requiredHeaders = [
  ["x-content-type-options", "nosniff"],
  ["x-frame-options", "deny"],
  ["content-security-policy", "default-src"],
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchOrThrow(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`);
  if (!response.ok) {
    throw new Error(`Expected 2xx for ${pathname}, got ${response.status}`);
  }
  return response;
}

async function waitForApp(maxAttempts = 15, delayMs = 1000) {
  let lastError = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetchOrThrow("/");
      return response;
    } catch (error) {
      lastError = error;
      await sleep(delayMs);
    }
  }
  throw new Error(`App did not become ready: ${String(lastError)}`);
}

function assertSecurityHeaders(response) {
  for (const [headerName, expectedValue] of requiredHeaders) {
    const value = response.headers.get(headerName);
    if (!value || !value.toLowerCase().includes(expectedValue)) {
      throw new Error(
        `Missing or invalid header ${headerName}. Expected to include: ${expectedValue}`,
      );
    }
  }
}

async function main() {
  const indexResponse = await waitForApp();
  assertSecurityHeaders(indexResponse);
  await fetchOrThrow("/manifest.json");
  console.log(`[smoke] OK for ${baseUrl}`);
}

main().catch((error) => {
  console.error(`[smoke] Failed: ${error instanceof Error ? error.message : String(error)}`);
  globalThis.process.exit(1);
});
