
import querystring from 'querystring';
import fetch from 'node-fetch';

const { SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET,SPOTIFY_REFRESH_TOKEN} = process.env;

const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export async function getAccessToken() {
    const res = await fetch(TOKEN_ENDPOINT, {method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });

    const data = await res.json();
    return data.access_token;
}

export async function fetchTopTracks() {
    const accessToken = await getAccessToken();

    const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term', {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    });

    const data = await res.json();
    console.log("Spotify top tracks response:", data);
    return data.items || [];
}

export async function fetchNowPlaying() {
    const accessToken = await getAccessToken();

    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
    });

    if (res.status === 204 || res.status > 400) return null;

    return await res.json();
}

export async function pauseTrack() {
    const accessToken = await getAccessToken();

    const res = await fetch("https://api.spotify.com/v1/me/player/pause", {method: "PUT",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (res.status === 204) {
        return { success: true };
    }

    const error = await res.json();
    return {success: false,status: res.status,error};
}