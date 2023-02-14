import React from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';
import './PieChart.css';


const PieChart = ({ percentages }) => {
    const data = [
        {
            title: 'Wins',
            value: percentages.wins,
            color: '#00FF00',
            label: 'Wins'
        },
        {
            title: 'Loses',
            value: percentages.loses,
            color: '#FF0000',
            label: 'Loses'
        },
        {
            title: 'Ties',
            value: percentages.ties,
            color: '#FFFF00',
            label: 'Ties'
        }
    ];
    const renderLabel = ({ dataEntry }) => (
        <div className="pie-chart-label">
            {dataEntry.title}: {dataEntry.value}%
        </div>
    );

    return (
        <div className="PieChart">
            <MinimalPieChart data={data} renderLabel={renderLabel} radius={50} reveal={true} label="asd" />
        </div>
    );
};

export default PieChart;
