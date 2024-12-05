import { hasEngaged } from '$src/lib/server/twitter.js';

export async function GET({ url }) {
	try {
		const targetUsername = url.searchParams.get('targetUsername');
		const res = await isFollowing(targetUsername);
		if (res) {
			return new Response(JSON.stringify({ followStatus: res }), { status: 200 });
		}
		return new Response(JSON.stringify({ followStatus: false }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
}
