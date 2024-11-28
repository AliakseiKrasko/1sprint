
import React from 'react';

type CounterDisplayProps = {
    value: number;
    maxValue: number;
};

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ value, maxValue }) => {
    const displayClass = value >= maxValue ? 'counter-display max' : 'counter-display';
    return <div className={displayClass}>
        <h4>Max value:{maxValue}</h4>
        <p>{value}</p>
    </div>;
};