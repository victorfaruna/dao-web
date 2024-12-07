import axios from 'axios';

export async function isFollowing(username: any) {
	const options = {
		method: 'GET',
		url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/following',
		params: {
			username_or_id_or_url: username,
			amount: '1000'
		},
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
		}
	};

	try {
		const { data } = await axios.request(options);
		if (data?.data?.items && data.data.items.some((item: any) => item.username === 'joji_int')) {
			return true;
		}
		return false;
	} catch (error) {
		console.error(error);
	}
}

export async function hasEngaged(username: any) {
	const options = {
		method: 'GET',
		url: `https://instagram-scraper-api2.p.rapidapi.com/v1/likes?code_or_id_or_url=DDOx_6EIIJS&t=eee&cb=${Date.now()}`,
		headers: {
			'x-rapidapi-key': '30e3972519mshf09e59ca5b3eebdp1350c4jsn0ea75975d5ab',
			'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
		}
	};

	try {
		const request = await fetch(options.url, {
			method: options.method,
			headers: options.headers,
			cache: 'no-store'
		});

		const data = await request.json();
		if (data?.data?.items && data.data.items.some((item: any) => item.username === username)) {
			return true;
		}
		return true;
	} catch (error) {
		console.error(error);
	}
}
