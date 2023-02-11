import React from 'react';
import './PlayerStats.css';

function PlayerStats(props) {
    const { firstName, lastName, fgPercentage, ftPercentage, threePointersMade, points, assists, rebounds, steals, turnovers, imageUrl } = props;
    return (
        <div className="PlayerStats">
            <img src={imageUrl} alt={`${firstName} ${lastName}`} />
            <ul>
                <li><span className="name">{firstName} {lastName}</span></li>
                <li>FG%: {fgPercentage}</li>
                <li>FT%: {ftPercentage}</li>
                <li>3PM: {threePointersMade}</li>
                <li>Points: {points}</li>
                <li>Assists: {assists}</li>
                <li>Rebounds: {rebounds}</li>
                <li>Steals: {steals}</li>
                <li>Turnovers: {turnovers}</li>
            </ul>
        </div>
    );
}


export default PlayerStats;
