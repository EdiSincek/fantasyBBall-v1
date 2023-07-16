import React, { useState, useEffect } from 'react';
import './Team.css';
import TeamBasicInfo from './teamBasicInfo/TeamBasicInfo';
import Roster from './roster/Roster';
import PlayerStats from './roster/player/playerStats/PlayerStats';

function Team(props) {
    const [team, setTeam] = useState({});
    useEffect(() => {
        fetch('http://localhost:3001/team?' + new URLSearchParams({
            teamId: props.teamId
        })).then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div className="Team">
            <p>BOK</p>
            <TeamBasicInfo team={team} />
            <Roster roster={team.roster} />
            <PlayerStats />

        </div>
    )


}
export default Team;