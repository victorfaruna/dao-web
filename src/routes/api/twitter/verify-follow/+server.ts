import { isFollowing } from '$src/lib/server/twitter';

export async function GET({ url }) {
	try {
		const targetUsername = url.searchParams.get('targetUsername');
		const res = await isFollowing('joji_int', targetUsername);
		if (res) {
			return new Response(JSON.stringify({ success: true }), { status: 200 });
		}
		return new Response(JSON.stringify({ success: false }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
}
