import React, { useState, useEffect } from 'react';
import Matchup from './Matchup'


function Matchups() {

    const [matchups, setMatchups] = useState({});
    useEffect(() => {
        fetch('http://localhost:3001/matchups')
            .then(res => res.json())
            .then(data => setMatchups(data))
            .catch(error => console.error(error));
    })
    return (
        <div className="Matchups">
            <div>
                {Object.values(matchups).map((value) =>
                    <Matchup key={value.t1} matchup={value} />
                )}
            </div>
        </div>
    );

}
export default Matchups;
