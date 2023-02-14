import React, { useState, useEffect } from 'react';
import './Team.css';
import PieChart from '../tools/piechart/PieChart';
import TeamBasicInfo from './teamBasicInfo/TeamBasicInfo';
import TeamStats from './teamStats/TeamStats';

function Team(props) {
    const [team, setTeam] = useState({});
    const percentages = {
        wins: 50,
        loses: 30,
        ties: 20
    };
    useEffect(() => {
        fetch('http://localhost:3001/team?' + new URLSearchParams({
            teamId: 2
        })).then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div className="Team">
            <p>BOK</p>
            <TeamBasicInfo team={team} />

        </div>
    )


}
export default Team;