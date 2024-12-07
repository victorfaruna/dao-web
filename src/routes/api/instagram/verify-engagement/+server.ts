import { hasEngaged } from '$src/lib/server/instagram.js';

export async function GET({ url }) {
	try {
		const targetUsername = url.searchParams.get('targetUsername');
		const res = await hasEngaged(targetUsername);
		if (res) {
			return new Response(JSON.stringify({ engagementStatus: res }), { status: 200 });
		}
		return new Response(JSON.stringify({ engageementStatus: false }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
}
