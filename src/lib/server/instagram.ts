import axios from 'axios';

export async function isFollowing(username: any) {
	const options = {
		method: 'POST',
		url: 'https://rocketapi-for-instagram.p.rapidapi.com/instagram/user/get_followers',
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'rocketapi-for-instagram.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
		data: {
			id: 58026151446,
			count: 12,
			max_id: null
		}
	};

	try {
		const { data } = await axios.request(options);
		if (
			data.response.body.users &&
			data.response.body.users.some((item: any) => item.username === username)
		) {
			return true;
		}
		return false;
	} catch (error) {
		console.error(error);
	}
}

export async function hasEngaged(username: any) {
	const likesOptions = {
		method: 'POST',
		url: 'https://rocketapi-for-instagram.p.rapidapi.com/instagram/media/get_likes',
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'rocketapi-for-instagram.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
		data: {
			shortcode: 'DDOx_6EIIJS',
			count: 12,
			max_id: null
		}
	};

	try {
		const { data } = await axios.request(likesOptions);
		if (
			data.response.body.users &&
			data.response.body.users.some((item: any) => item.username === username)
		) {
			return true;
		}
		return false;
	} catch (error) {
		console.error(error);
	}
}
