import { ANTHROPIC_API_KEY } from '$env/static/private';
import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({
	apiKey: ANTHROPIC_API_KEY
});
export const GET = async ({ url }) => {
	try {
		const { searchParams } = new URL(url);
		const matric = searchParams.get('matric');
		console.log(matric ? matric : 'kum');
		const msg = await anthropic.messages.create({
			model: 'claude-2.0',
			max_tokens: 3024,
			messages: [
				{
					role: 'user',
					content: `based on the first three letters tell me the department and faculty for matric number: ${matric} in fuoye university in the format {department: "", faculty: ""} and please dont write any other thing just the two information i need and do not add the escape character backtick`
				}
			]
		});
		return new Response(JSON.stringify(msg), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify('An error occured'), {
			status: 405,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
