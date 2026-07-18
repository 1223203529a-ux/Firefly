const WALINE_ORIGIN = "https://snozze-waline.vercel.app";

function getProxyPath(path: string | string[] | undefined) {
	if (Array.isArray(path)) return path.join("/");
	return path || "";
}

function rewriteLocation(location: string | null, requestUrl: URL) {
	if (!location) return null;

	const walineOrigin = new URL(WALINE_ORIGIN).origin;

	if (location.startsWith(walineOrigin)) {
		const locationUrl = new URL(location);

		return `${requestUrl.origin}/waline${locationUrl.pathname}${locationUrl.search}`;
	}

	return location;
}

export async function onRequest({
	request,
	params,
}: {
	request: Request;
	params: Record<string, string | string[] | undefined>;
}) {
	const requestUrl = new URL(request.url);
	const proxyPath = getProxyPath(params.path);
	const targetUrl = new URL(WALINE_ORIGIN);

	targetUrl.pathname = `/${proxyPath}`;
	targetUrl.search = requestUrl.search;

	const headers = new Headers(request.headers);

	headers.delete("host");
	headers.set("x-forwarded-host", requestUrl.host);
	headers.set("x-forwarded-proto", requestUrl.protocol.replace(":", ""));

	const response = await fetch(
		new Request(targetUrl.toString(), {
			method: request.method,
			headers,
			body: request.body,
			redirect: "manual",
		}),
	);
	const responseHeaders = new Headers(response.headers);
	const nextLocation = rewriteLocation(responseHeaders.get("location"), requestUrl);

	if (nextLocation) {
		responseHeaders.set("location", nextLocation);
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: responseHeaders,
	});
}
