import querystring from 'querystring';
import {Buffer} from "buffer";

// const {
//     SPOTIFY_CLIENT_ID: client_id,
//     SPOTIFY_CLIENT_SECRET: client_secret,
//     SPOTIFY_REFRESH_TOKEN: refresh_token,
// } = process.env;

const client_id="ea7b3333f05546f4b992d7ed868db883"
const client_secret="7a0a4c9446924fe18d3e8ba891cb86aa"
const refresh_token="AQB827_vg4z4Gc1bRG4h6cI1ksxAzPgX9rTYzQEdlxNPPaA-nwEKNt4iIyysKML5dePHUiPe-xld0QuOHnu0g_RAh9TIaFtr9MX2nzor3QVq2l_n777-Q6INIqT9Xodb3VE"

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async () => {

    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return ({ isPlaying: false });
    }
    const song = await response.json();
    return {
        isPlaying : song.is_playing,
        title : song.item.name,
        artist : song.item.artists.map((_artist) => _artist.name).join(', '),
        album : song.item.album.name,
        albumImageUrl : song.item.album.images[0].url,
        songUrl : song.item.external_urls.spotify,
    };
};
