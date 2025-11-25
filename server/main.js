import { serve } from "https://deno.land/std@0.201.0/http/server.ts";
import { routeRequest } from "./router.js";
import { log } from "./utils.js";

const PORT = Number(Deno.env.get("PORT") || 8080);

log(`Server running on http://0.0.0.0:${PORT}`);
serve(routeRequest, { addr: `0.0.0.0:${PORT}` });
