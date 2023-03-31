import React, { useEffect } from 'react';
import './Roster.css';
import Player from './player/Player';

function Roster(props) {
    if (!props.roster) {
        console.log("Error: Roster is empty!")
        return null;
    }
    return (
        <div className="Roster">
            {Object.values(props.roster).map(player => (
                <Player key={player.player_id} player={player} />
            ))}

        </div>
    )


} export default Roster;