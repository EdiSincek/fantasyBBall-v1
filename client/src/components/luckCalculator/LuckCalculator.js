import React, { useState } from 'react';
import './LuckCalculator.css';
import Dropdown from '../tools/dropdown/Dropdown';
import SeasonTable from './seasonTable/SeasonTable';

function LuckCalculator(props) {
    const [selectedOption, setSelectedOption] = useState('team1');

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="LuckCalculator">
            <Dropdown options={['team1', 'team2', 'team3']} onChange={handleOptionChange} />
            <p>You selected: {selectedOption}</p>
            <SeasonTable></SeasonTable>
        </div>
    );
}

export default LuckCalculator;