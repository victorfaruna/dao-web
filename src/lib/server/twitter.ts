import { TWITTER_BEARER_TOKEN } from '$env/static/private';
import { TwitterApi } from 'twitter-api-v2';
const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN);
const client = twitterClient.readOnly;
export async function isFollowing(sourceUsername: any, targetUsername: any) {
	try {
		// Step 1: Get user IDs for source and target usernames
		const [sourceUser, targetUser] = await Promise.all([
			client.v2.userByUsername(sourceUsername),
			client.v2.userByUsername(targetUsername)
		]);

		if (!sourceUser || !targetUser) {
			console.log('Could not find one or both users.');
			return false;
		}

		const sourceUserId = sourceUser.data.id;
		const targetUserId = targetUser.data.id;

		// Step 2: Fetch the following list of the source user
		const following = await client.v2.following(sourceUserId, {
			asPaginator: true // Allows pagination if the list is large
		});

		// Step 3: Check if the target user is in the following list
		const isFollowing =
			Array.isArray(following.data) && following.data.some((user) => user.id === targetUserId);

		if (isFollowing) {
			console.log(`${sourceUsername} is following ${targetUsername}.`);
		} else {
			console.log(`${sourceUsername} is NOT following ${targetUsername}.`);
		}

		return isFollowing;
	} catch (error) {
		console.error('Error checking follow status:', error);
		return false;
	}
}
