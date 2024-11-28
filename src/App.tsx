import React, { useState } from 'react';
import './App.css';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButtons } from './components/CountersButtons'

function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(10);


    const increment = () => {
        setCount((prev) => (prev < maxValue ? prev + 1 : prev));
    };
    const reset = () => {
        setCount(0);
        setMaxValue(Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div className="App">
            <CounterDisplay maxValue={maxValue} value={count} />
            <CounterButtons
                onIncrement={increment}
                onReset={reset}
                disableIncrement={count >= maxValue}
                disableReset={count === 0}
            />

        </div>
    );
}

export default App;

