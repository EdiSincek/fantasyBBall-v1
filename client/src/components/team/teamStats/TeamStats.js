import React, { useState, useEffect } from 'react';
import './TeamStats.css';

function TeamStats(props) {

    const [teamStats, setTeamStats] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/teamStats?' + new URLSearchParams({
            teamId: 2
        })).then(res => res.json())
            .then(data => setTeamStats(data))
    }, [])

    return (
        <div className="TeamStats">
            <h1>TEAM STATS ({teamStats.coverage} 2022/2023)</h1>
            <p>FG: {teamStats.fg}% ({teamStats.fgTotal})</p>
            <p>FT: {teamStats.ft}% ({teamStats.ftTotal})</p>
            <p>3pm: {teamStats.threepm}</p>
            <p>Points: {teamStats.points}</p>
            <p>Rebounds: {teamStats.rebounds}</p>
            <p>Assists: {teamStats.assists}</p>
            <p>Steals: {teamStats.steals}</p>
            <p>Blocks: {teamStats.blocks}</p>
            <p>Turnovers: {teamStats.turnovers}</p>

        </div>
    )

} export default TeamStats;