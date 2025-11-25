/**
 * utils.js - reusable module for my-js-webserver
 * Features:
 * 1. JSON and text response helpers
 * 2. Logging
 * 3. Public IP fetch
 */

/** JSON Response helper */
export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Text Response helper */
export function textResponse(text, status = 200) {
  return new Response(text, {
    status,
    headers: { "Content-Type": "text/plain" },
  });
}

/** Simple logger */
export function log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

/** Fetch public IP (returns { ip } or { error }) */
export async function getPublicIP() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    if (!res.ok) throw new Error("Failed to fetch public IP");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}
