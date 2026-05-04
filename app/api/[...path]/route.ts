export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
]);

function getApiBaseUrl() {
  return (
    process.env.GSTECH_API_BASE_URL ||
    process.env.NEXT_PUBLIC_GSTECH_API_BASE_URL ||
    "http://localhost:3000"
  ).replace(/\/+$/, "");
}

async function proxy(req: Request, context: RouteContext) {
  const { path } = await context.params;
  const sourceUrl = new URL(req.url);
  const targetUrl = new URL(`/api/${path.join("/")}${sourceUrl.search}`, getApiBaseUrl());

  const headers = new Headers(req.headers);
  for (const header of HOP_BY_HOP_HEADERS) headers.delete(header);

  const init: RequestInit = {
    method: req.method,
    headers,
    redirect: "manual",
  };

  if (!["GET", "HEAD"].includes(req.method)) {
    init.body = await req.arrayBuffer();
  }

  const response = await fetch(targetUrl, init);
  const responseHeaders = new Headers(response.headers);
  for (const header of HOP_BY_HOP_HEADERS) responseHeaders.delete(header);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}

export function GET(req: Request, context: RouteContext) {
  return proxy(req, context);
}

export function POST(req: Request, context: RouteContext) {
  return proxy(req, context);
}

export function PUT(req: Request, context: RouteContext) {
  return proxy(req, context);
}

export function PATCH(req: Request, context: RouteContext) {
  return proxy(req, context);
}

export function DELETE(req: Request, context: RouteContext) {
  return proxy(req, context);
}
