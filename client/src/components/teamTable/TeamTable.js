import React from 'react';
import './TeamTable.css'

const teams = [
    { position: 1, name: 'Team A', points: 20 },
    { position: 2, name: 'Team B', points: 18 },
    { position: 3, name: 'Team C', points: 16 },
    { position: 4, name: 'Team D', points: 14 },
    { position: 5, name: 'Team E', points: 12 },
    { position: 6, name: 'Team F', points: 10 },
    { position: 7, name: 'Team G', points: 8 },
    { position: 8, name: 'Team H', points: 6 },
    { position: 9, name: 'Team I', points: 4 },
    { position: 10, name: 'Team J', points: 2 },
    { position: 11, name: 'Team K', points: 1 },
    { position: 12, name: 'Team L', points: 0 }
];

const TeamTable = () => {
    return (
        <table class="league-table">
            <thead>
                <tr>
                    <th class="table-header">Position</th>
                    <th class="table-header">Name</th>
                    <th class="table-header">Points</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team) => (
                    <tr key={team.position}>
                        <td class="table-cell table-cell-position">{team.position}</td>
                        <td class="table-cell table-cell-name">{team.name}</td>
                        <td class="table-cell table-cell-points">{team.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TeamTable;
