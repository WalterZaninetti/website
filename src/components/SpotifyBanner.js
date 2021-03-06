import React, { useEffect, useState } from "react";
import SpotifyApi from "../api/SpotifyApi";
import spotify from "../static/icons/spotify.svg";
import spotify_black from "../static/icons/spotify_black.svg";
import { Transition } from "@headlessui/react";
// https://accounts.spotify.com/authorize?client_id=ea7b3333f05546f4b992d7ed868db883&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
//http://localhost:3000/?code=AQAXIFGUYlKvwuVuCgj4FI2EfjOmEoKbV0qcty_j6-MaLqGv7CL-KqzzdE484TT03i5PZxyVqulEkUMJvupbVpQIHENisA9h23iT_Ne-UlTLE1xBOU4VbO_0HyR6j7_O-H-44JLv-OPekwIDFA4N3TcUFXv1P5hUIyW5BEvun8z4TQci3Au8CSMzATPkpE-3UilDznEv

// curl -H "Authorization: Basic ZWE3YjMzMzNmMDU1NDZmNGI5OTJkN2VkODY4ZGI4ODM6N2EwYTRjOTQ0NjkyNGZlMThkM2U4YmE4OTFjYjg2YWE=" -d grant_type=authorization_code -d code=AQAXIFGUYlKvwuVuCgj4FI2EfjOmEoKbV0qcty_j6-MaLqGv7CL-KqzzdE484TT03i5PZxyVqulEkUMJvupbVpQIHENisA9h23iT_Ne-UlTLE1xBOU4VbO_0HyR6j7_O-H-44JLv-OPekwIDFA4N3TcUFXv1P5hUIyW5BEvun8z4TQci3Au8CSMzATPkpE-3UilDznEv -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

// {
//   "access_token":"BQAxTzuj15652vLRsvAoCDSeCyT-NLguKYM-oclrcGEWUhAhYYdVAtVKObTtEekDPLKAY7gju57wiF7eQpVmvmAP71M45xe4Pjv7n-fiUrQioYRFKT11I5SgpQ8r4BdvC-Wf7H4y5Nb6aQ12O07YU8c",
//     "token_type":"Bearer",
//     "expires_in":3600,
//     "refresh_token":"AQB827_vg4z4Gc1bRG4h6cI1ksxAzPgX9rTYzQEdlxNPPaA-nwEKNt4iIyysKML5dePHUiPe-xld0QuOHnu0g_RAh9TIaFtr9MX2nzor3QVq2l_n777-Q6INIqT9Xodb3VE",
//     "scope":"user-read-currently-playing"
// }

// {
//   "album":{
//   "album_type":"single",
//       "artists":[
//     {
//       "external_urls":{
//         "spotify":"https://open.spotify.com/artist/2TwOrUcYnAlIiKmVQkkoSZ"
//       },
//       "href":"https://api.spotify.com/v1/artists/2TwOrUcYnAlIiKmVQkkoSZ",
//       "id":"2TwOrUcYnAlIiKmVQkkoSZ",
//       "name":"Wet Leg",
//       "type":"artist",
//       "uri":"spotify:artist:2TwOrUcYnAlIiKmVQkkoSZ"
//     }
//   ],
//       "external_urls":{
//     "spotify":"https://open.spotify.com/album/2X6hKiTx3P5LGBEvc8oJq6"
//   },
//   "href":"https://api.spotify.com/v1/albums/2X6hKiTx3P5LGBEvc8oJq6",
//       "id":"2X6hKiTx3P5LGBEvc8oJq6",
//       "images":[
//     {
//       "height":640,
//       "url":"https://i.scdn.co/image/ab67616d0000b273209e28d62fd62fd976a3aae5",
//       "width":640
//     },
//     {
//       "height":300,
//       "url":"https://i.scdn.co/image/ab67616d00001e02209e28d62fd62fd976a3aae5",
//       "width":300
//     },
//     {
//       "height":64,
//       "url":"https://i.scdn.co/image/ab67616d00004851209e28d62fd62fd976a3aae5",
//       "width":64
//     }
//   ],
//       "name":"Chaise Longue",
//       "release_date":"2021-06-15",
//       "release_date_precision":"day",
//       "total_tracks":1,
//       "type":"album",
//       "uri":"spotify:album:2X6hKiTx3P5LGBEvc8oJq6"
// },
//   "artists":[
//   {
//     "external_urls":{
//       "spotify":"https://open.spotify.com/artist/2TwOrUcYnAlIiKmVQkkoSZ"
//     },
//     "href":"https://api.spotify.com/v1/artists/2TwOrUcYnAlIiKmVQkkoSZ",
//     "id":"2TwOrUcYnAlIiKmVQkkoSZ",
//     "name":"Wet Leg",
//     "type":"artist",
//     "uri":"spotify:artist:2TwOrUcYnAlIiKmVQkkoSZ"
//   }
// ],
//     "disc_number":1,
//     "duration_ms":196905,
//     "explicit":false,
//     "external_ids":{
//   "isrc":"GBCEL2100271"
// },
//   "external_urls":{
//   "spotify":"https://open.spotify.com/track/7iqAuZe5yS0suLQcFfVK39"
// },
//   "href":"https://api.spotify.com/v1/tracks/7iqAuZe5yS0suLQcFfVK39",
//     "id":"7iqAuZe5yS0suLQcFfVK39",
//     "is_local":false,
//     "name":"Chaise Longue",
//     "popularity":70,
//     "preview_url":"https://p.scdn.co/mp3-preview/0f9422d85568faab133d08be97ff6d4e7dffa576?cid=774b29d4f13844c495f206cafdad9c86",
//     "track_number":1,
//     "type":"track",
//     "uri":"spotify:track:7iqAuZe5yS0suLQcFfVK39"
// }

export default function SpotifyBanner() {
  const [track, setTrack] = useState({
    track: {
      album: { images: [""] },
    },
  });

  const [showInfo, setShowInfo] = useState(false);

  // useEffect(() => {
  //   const fetchData = setInterval(
  //     () => async () => {
  //       const json = await SpotifyApi();
  //       setTrack(json);
  //     },
  //     7500
  //   );
  //   return () => clearInterval(fetchData);
  // } , [track]);

    useEffect(() => {
        const fetchData = async () => {
            const json = await SpotifyApi();
            setTrack(json);
        };
        fetchData().catch(console.error);
    } , []);

    async function handleOpen(value) {
        setShowInfo(value)
        if(value){
            const json = await SpotifyApi();
            setTrack(json);
        }
    }


  // function getTrack() {
  //   axios
  //     .get("https://api.spotify.com/v1/me/player/currently-playing", {
  //       headers: {
  //         Authorization:
  //           "Bearer BQDoUT1TAa0pXrABUbn4QZBE8JhetKp5snpgY0K7HfjhFahed8bSMSF5_9vmoinS6Xk4oFUFGTieBfH3YIwLQDZ8Sby8JP44O0MIS1woxdMjVJC49oIWDgbNBMZ3Eq8u0sFQ0g6HDOYjXPUbL-ee",
  //       },
  //     })
  //     .then(function (response) {
  //       // spotify_obj = response.data.item;
  //       const spotify_obj = response.data.item;
  //       setTrack(spotify_obj)
  //       console.log(response.data.item);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }

  return (
    <div className=" flex items-center bg-walter-green justify-between rounded-full p-2">
      <img
        onClick={(e) => handleOpen(!showInfo)}
        src={spotify}
        className={
          track.isPlaying === false
            ? "hidden"
            : "h-16 w-16 hover:animate-spin cursor-pointer"
        }
        alt="Check my spotify! Im listening something"
      />
      <img
        src={spotify_black}
        className={
          track.isPlaying === true
            ? "hidden"
            : "h-16 w-16 hover:animate-spin cursor-pointer"
        }
        alt="Not playing"
      />
      <Transition
        show={showInfo}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className=" flex p-2 flex justify-center items-center animate-pulse">
            {/*<span className=" rounded-lg">*/}
            {/*  <img*/}
            {/*    src={track.albumImageUrl}*/}
            {/*    className="h-24 w-24"*/}
            {/*    aria-hidden="true"*/}
            {/*    alt=""*/}
            {/*  />*/}
            {/*</span>*/}
            <p className=" font-extrabold text-walter-light">
              <span className="inline truncate">
                {track.title}
                <span className="text-center block text-walter-light">{track.artist}</span>
              </span>
            </p>
          </div>
        </div>
      </Transition>
    </div>
  );
}
