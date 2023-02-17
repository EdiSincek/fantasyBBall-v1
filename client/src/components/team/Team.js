import React, { useState, useEffect } from 'react';
import './Team.css';
import TeamBasicInfo from './teamBasicInfo/TeamBasicInfo';
import Roster from './roster/Roster';

function Team(props) {
    const [team, setTeam] = useState({});
    useEffect(() => {
        fetch('http://localhost:3001/team?' + new URLSearchParams({
            teamId: 11
        })).then(res => res.json())
            .then(data => setTeam(data))
        console.log(team)
    }, [])

    return (
        <div className="Team">
            <p>BOK</p>
            <TeamBasicInfo team={team} />
            <Roster roster={team.roster} />

        </div>
    )


}
export default Team;