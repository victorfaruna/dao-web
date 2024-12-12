import axios from 'axios';

export async function isFollowing(username: any) {
	const options = {
		method: 'POST',
		url: 'https://rocketapi-for-instagram.p.rapidapi.com/instagram/user/get_followers',
		headers: {
			'x-rapidapi-key': '8d7145d901msh18a8d29b7a15495p10c346jsnba409010d96e',
			'x-rapidapi-host': 'rocketapi-for-instagram.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
		data: {
			id: 58026151446,
			count: 99,
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
			'x-rapidapi-key': '8d7145d901msh18a8d29b7a15495p10c346jsnba409010d96e',
			'x-rapidapi-host': 'rocketapi-for-instagram.p.rapidapi.com',
			'Content-Type': 'application/json'
		},
		data: {
			shortcode: 'DDOx_6EIIJS',
			count: 1000,
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
