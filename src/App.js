import React, { useEffect} from 'react';
import Login from './Login';

import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // runs a code based on given condition
  const [{ user , token}, dispatch] = useDataLayerValue(); 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      //USe spotify object to get access toke from spotify app
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      
      //Get playist of user from spotify using spotify object
      spotify.getUserPlaylists().then((playlists) => {
              dispatch({
                type: 'SET_PLAYLISTS',
                playlists: playlists,
              })
            }); 

      spotify.getPlaylist("00ZzfAXdkvKpzWRGURWpd8").then(response => {
              dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response,
              })
      })      
    }

  }, []);



  
  return (
    <div className="app">
      {
        
        token ? <Player spotify={spotify}/> : <Login /> 
        
      }
    </div>
  );
}
export default App;
