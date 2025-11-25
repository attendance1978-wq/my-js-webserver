import { routeRequest } from "./router.js";
import { settings } from "./config.js";

// Start server
console.log(`Server running on http://${settings.host}:${settings.port}`);

Deno.serve({ port: settings.port, hostname: settings.host }, async (req) => {
    return await routeRequest(req);
});
