import React from 'react';
import './TeamBasicInfo.css';
import TeamStats from '../teamStats/TeamStats'

function TeamBasicInfo(props) {

    return (
        <div className="TeamBasicInfo">
            <img className="team-image" src={props.team.teamImage} alt="Team"></img>
            <div className="team-info">
                <h1 className="team-name">{props.team.name}</h1>
                <p className="team-description">Manager: {props.team.manager}</p>
                <p className="team-description">STANDINGS: {props.team.teamStandings}</p>
                <p className="team-description">GAMES BEHIND: {props.team.gamesBehind}</p>
                <p className="team-description">WINS: {props.team.wins}</p>
                <p className="team-description">PERC: {props.team.percentage}%</p>
            </div>
            <TeamStats className="team-stats" />
        </div>
    );
}
export default TeamBasicInfo;