import { serveFile } from "https://deno.land/std/http/file_server.ts";
import { jsonResponse, textResponse } from "./response.js";

export async function routeRequest(req) {
    const url = new URL(req.url);

    // API routes
    if (url.pathname.startsWith("/api/hello")) {
        const { helloMessage } = await import("../api/hello.js");
        return jsonResponse({ message: helloMessage() });
    }

    // Static files
    try {
        return await serveFile(req, `public${url.pathname === "/" ? "/index.html" : url.pathname}`);
    } catch {
        return textResponse("404 Not Found", 404);
    }
}
