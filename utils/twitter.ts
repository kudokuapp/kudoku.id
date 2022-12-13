import { Client, auth } from 'twitter-api-sdk';

// Initialize auth client first
const authClient = new auth.OAuth2User({
    client_id: process.env.TWITTER_CLIENT_ID as string,
    client_secret: process.env.TWITTER_CLIENT_SECRET as string,
    callback: 'https://kudoku-id.firebaseapp.com/__/auth/handler',
    scopes: ['tweet.write', 'users.read', 'tweet.read', 'offline.access'],
});

// Pass auth credentials to the library client
export const twitterClient = new Client(authClient);
