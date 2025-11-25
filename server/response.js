export function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" }
    });
}

export function textResponse(text, status = 200) {
    return new Response(text, {
        status,
        headers: { "Content-Type": "text/plain" }
    });
}
