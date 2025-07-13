import express from 'express';
import open from 'open';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import querystring from 'querystring';

dotenv.config();
const app = express();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET,SPOTIFY_REDIRECT_URI } = process.env;
console.log(process.env.SPOTIFY_CLIENT_ID)

const PORT = 8888;
const scope = "user-read-playback-state user-modify-playback-state user-read-currently-playing user-top-read";
const state = "some-random-state";

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
    }),
  });

  const data = await response.json();

  if (data.refresh_token) {
    console.log("Spotify Refresh Token:\n",data.refresh_token);
    return res.send("Refresh token generated!");
  } else {
    console.error("Error while getting token", data);
    return res.send("Failed to get token.");
  }
});

app.listen(PORT, () => {
  const authUrl = `https://accounts.spotify.com/authorize?${querystring.stringify({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: SPOTIFY_REDIRECT_URI,
    scope,
    state,
  })}`;

  console.log("Opened browser to authenticate with Spotify");
  open(authUrl);
});
