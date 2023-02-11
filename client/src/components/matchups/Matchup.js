import React, { useState, useEffect } from 'react';
import './Matchup.css'

function Matchup(props) {

    return (
        <div className="Matchup">
            <h2>{props.matchup.t1} vs. {props.matchup.t2}</h2>
            <p>{props.matchup.t1_score} - {props.matchup.t2_score}</p>
        </div>
    )


}
export default Matchup;