import React from 'react';
import './Login.css';
import { loginUrl } from './spotify.js';

const Login = () => {
    return (
        <div className="login">
            <img  alt="Spotify Logo" 
                  src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 

            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            
        </div>
    );
}

export default Login;


