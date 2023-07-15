import React from 'react';
import './Dropdown.css';

function Dropdown(props) {
    const { options, onChange } = props;

    return (
        <div className="Dropdown">
            <select onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;