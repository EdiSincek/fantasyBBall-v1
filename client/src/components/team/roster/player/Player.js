import React, { useEffect } from 'react';
import './Player.css';

function Player(props) {
    // useEffect(() => {
    //     console.log(props)
    // })
    return (
        <div className="Player">
            <img src={props.player.headshot.url} alt={props.player.name.full} />
            <ul>
                <li><span className="name">{props.player.name.full}</span></li>
                <li><b> {props.player.display_position}</b></li>
                <li> {props.player.editorial_team_full_name}</li>


            </ul>
        </div>
    );
}


export default Player;
