import axios from 'axios';

export async function isFollowing(username: any) {
	const options = {
		method: 'GET',
		url: 'https://twitter241.p.rapidapi.com/followers-ids',
		params: {
			username: 'JOJI_INT',
			count: '5000'
		},
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'twitter241.p.rapidapi.com'
		}
	};
	try {
		const userId = await getUserId(username);
		const { data } = await axios.request(options);
		if (data.ids.includes(userId)) {
			return true;
		}
		return false;
	} catch (error) {
		console.error(error);
	}
}
export async function getUserId(username: any) {
	const options = {
		method: 'GET',
		url: 'https://twitter241.p.rapidapi.com/user',
		params: {
			username: username
		},
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'twitter241.p.rapidapi.com'
		}
	};

	try {
		const { data } = await axios.request(options);
		return data.result.data.user.result.rest_id;
	} catch (error) {
		console.error(error);
	}
}

export async function hasEngaged() {}
