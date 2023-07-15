import React, { useEffect, useState } from 'react';
import Tablerow from '../Tablerow/Tablerow';
function SeasonTable(props) {

    const [teamWeeklyStats, setTeamWeeklyStats] = useState({});
    const [teamSeasonStats, setTeamSeasonStats] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/luck?' + new URLSearchParams({
            teamId: 2,
            week: 23
        })).then(res => res.json())
            .then(data => setTeamWeeklyStats(data))

        fetch('http://localhost:3001/teamStats?' + new URLSearchParams({
            teamId: 2
        })).then(res => res.json())
            .then(data => setTeamSeasonStats(data))
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>FG</th>
                    <th>FT</th>
                    <th>TPT</th>
                    <th>PT</th>
                    <th>REB</th>
                    <th>AST</th>
                    <th>ST</th>
                    <th>BLK</th>
                    <th>TO</th>

                </tr>
            </thead>
            <tbody>
                <Tablerow props={teamSeasonStats} />

                <Tablerow props={teamWeeklyStats} />
            </tbody>
        </table>
    );
}

export default SeasonTable;