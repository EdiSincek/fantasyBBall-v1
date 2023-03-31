import React, { useEffect } from 'react';
import './PlayerStats.css';

function PlayerStats(props) {

    useEffect(() => {
        fetch('http://localhost:3001/playerStats?' + new URLSearchParams({
            playerId: 5479
        })).then(res => res.json())
            .then(data => console.log(data))

    })

    return (
        <div className="PlayerStats">

        </div>
    )

} export default PlayerStats;