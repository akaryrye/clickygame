import React from 'react';
import './header.css';


function Header(props) {

    return(
        <div id='header'>
            <h1 id='header-title'>Clicky Game</h1>
            <div id='header-scores'>
                <h3>Current Score: {props.score}</h3>
                <h3>Top Score: {props.topScore}</h3>
            </div>
            <div id='header-links'>
                <a href='https://github.com/akaryrye/clickygame' target="_blank">Github Repo</a>
                <a href='https://ralldrin.com/'>About Me</a>
            </div>
        </div>
    )

}

export default Header;
