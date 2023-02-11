import React, { useState, useEffect } from 'react';
import './TeamTable.css'


function TeamTable() {
    const [standings, setStandings] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/standings')
            .then(res => res.json())
            .then(data => setStandings(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <table className="league-table">
            <thead>
                <tr>
                    <th className="table-header">Position</th>
                    <th className="table-header">Name</th>
                    <th className="table-header">Manager</th>
                    <th className="table-header">Games behind</th>
                    <th className="table-header">Record</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(standings).map((team) => (
                    <tr key={team.name}>
                        <td className="table-cell">{team.position}</td>
                        <td className="table-cell">{team.name}</td>
                        <td className="table-cell">{team.manager}</td>
                        <td className="table-cell">{team.games_behind}</td>
                        <td className="table-cell">{team.record}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TeamTable;
