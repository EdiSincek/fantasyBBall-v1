import React, { useState, useEffect } from 'react';
import './Matchup.css'

function Matchup(props) {
    const [index, setIndex] = useState(0);


    return (
        <div className="Matchup">
            {/* <h2>{props.matchup.t1} vs. {props.matchup.t2}</h2>
            <p>{props.matchup.t1_score} - {props.matchup.t2_score}</p>
            <p>{props.matchup.t1_fg} fg% {props.matchup.t2_fg}</p>
            <p>{props.matchup.t1_ft} ft% {props.matchup.t2_ft}</p>
            <p>{props.matchup.t1_3pm} 3pm {props.matchup.t2_3pm}</p>
            <p>{props.matchup.t1_points} points {props.matchup.t2_points}</p>
            <p>{props.matchup.t1_rebounds} rebounds {props.matchup.t2_rebounds}</p>
            <p>{props.matchup.t1_assists} assists {props.matchup.t2_assists}</p>
            <p>{props.matchup.t1_steals} steals {props.matchup.t2_steals}</p>
            <p>{props.matchup.t1_blocks} blocks {props.matchup.t2_blocks}</p>
            <p>{props.matchup.t1_turnovers} turnovers {props.matchup.t2_turnovers}</p> */}
            {
                Object.values(props).map((pair) => {
                    const biggerScore = Math.max(pair.t1_score, pair.t2_score)
                    const biggerFg = Math.max(pair.t1_fg, pair.t2_fg)
                    const biggerFt = Math.max(pair.t1_ft, pair.t2_ft)
                    const bigger3pm = Math.max(pair.t1_3pm, pair.t2_3pm)
                    const biggerPoints = Math.max(pair.t1_points, pair.t2_points)
                    const biggerRebounds = Math.max(pair.t1_rebounds, pair.t2_rebounds)
                    const biggerAssists = Math.max(pair.t1_assists, pair.t2_assists)
                    const biggerSteals = Math.max(pair.t1_steals, pair.t2_steals)
                    const biggerBlocks = Math.max(pair.t1_blocks, pair.t2_blocks)
                    const biggerTurnovers = Math.max(pair.t1_turnovers, pair.t2_turnovers)

                    const biggerStyle = { color: 'green' };
                    const smallerStyle = { color: 'red' };
                    return (
                        <p key={pair}>
                            <span style={biggerScore === Number(pair.t1_score) ? biggerStyle : smallerStyle}>{pair.t1} </span> VS
                            <span style={biggerScore === Number(pair.t2_score) ? biggerStyle : smallerStyle}> {pair.t2} </span>
                            <br />
                            <span style={biggerScore === Number(pair.t1_score) ? biggerStyle : smallerStyle}>{pair.t1_score}</span> -
                            <span style={biggerScore === Number(pair.t2_score) ? biggerStyle : smallerStyle}> {pair.t2_score}</span>
                            <br />
                            <span style={biggerFg === Number(pair.t1_fg) ? biggerStyle : smallerStyle}> {pair.t1_fg}</span> - FG% -
                            <span style={biggerFg === Number(pair.t2_fg) ? biggerStyle : smallerStyle}> {pair.t2_fg} </span>
                            <br />
                            <span style={biggerFt === Number(pair.t1_ft) ? biggerStyle : smallerStyle}> {pair.t1_ft}</span> - FT% -
                            <span style={biggerFt === Number(pair.t2_ft) ? biggerStyle : smallerStyle}> {pair.t2_ft} </span>
                            <br />
                            <span style={bigger3pm === Number(pair.t1_3pm) ? biggerStyle : smallerStyle}> {pair.t1_3pm}</span> - 3PM -
                            <span style={bigger3pm === Number(pair.t2_3pm) ? biggerStyle : smallerStyle}> {pair.t2_3pm} </span>
                            <br />
                            <span style={biggerPoints === Number(pair.t1_points) ? biggerStyle : smallerStyle}> {pair.t1_points}</span> - PTS -
                            <span style={biggerPoints === Number(pair.t2_points) ? biggerStyle : smallerStyle}> {pair.t2_points} </span>
                            <br />
                            <span style={biggerRebounds === Number(pair.t1_rebounds) ? biggerStyle : smallerStyle}> {pair.t1_rebounds}</span> - RBS -
                            <span style={biggerRebounds === Number(pair.t2_rebounds) ? biggerStyle : smallerStyle}> {pair.t2_rebounds} </span>
                            <br />
                            <span style={biggerAssists === Number(pair.t1_assists) ? biggerStyle : smallerStyle}> {pair.t1_assists}</span> - AST -
                            <span style={biggerAssists === Number(pair.t2_assists) ? biggerStyle : smallerStyle}> {pair.t2_assists} </span>
                            <br />
                            <span style={biggerSteals === Number(pair.t1_steals) ? biggerStyle : smallerStyle}> {pair.t1_steals}</span> - ST -
                            <span style={biggerSteals === Number(pair.t2_steals) ? biggerStyle : smallerStyle}> {pair.t2_steals} </span>
                            <br />
                            <span style={biggerBlocks === Number(pair.t1_blocks) ? biggerStyle : smallerStyle}> {pair.t1_blocks}</span> - BLK -
                            <span style={biggerBlocks === Number(pair.t2_blocks) ? biggerStyle : smallerStyle}> {pair.t2_blocks} </span>
                            <br />
                            <span style={biggerTurnovers === Number(pair.t1_turnovers) ? smallerStyle : biggerStyle}> {pair.t1_turnovers}</span> - TO -
                            <span style={biggerTurnovers === Number(pair.t2_turnovers) ? smallerStyle : biggerStyle}> {pair.t2_turnovers} </span>
                        </p>
                    );

                })}
        </div>
    )


}
export default Matchup;