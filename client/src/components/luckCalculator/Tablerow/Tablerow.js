import React, { useEffect } from 'react';
import './Tablerow.css'

function Tablerow(props) {
    console.log(props.props)

    return (
        <tr>
            <td>{props.props.coverage}</td>
            <td>{props.props.fgTotal} ({props.props.fg})</td>
            <td>{props.props.ftTotal} ({props.props.ft})</td>
            <td>{props.props.threepm}</td>
            <td>{props.props.points}</td>
            <td>{props.props.rebounds}</td>
            <td>{props.props.assists}</td>
            <td>{props.props.steals}</td>
            <td>{props.props.blocks}</td>
            <td>{props.props.turnovers}</td>
        </tr>
    );
}

export default Tablerow;
