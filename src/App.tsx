import React, {useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay';
import {CounterButtons} from './components/CountersButtons'

function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(10);


    const increment = () => {
        setCount((prev) => (prev < maxValue ? prev + 1 : prev));
    };
    const reset = () => {
        setCount(0);
        setMaxValue(maxValue);
        // setMaxValue(Math.floor(Math.random() * 10) + 1);
    }
    const onSet = () => {
        toggleSetMode()
    }

    const [mode, SetMode] = useState(false);
    const toggleSetMode = () => {
        SetMode(prev => !prev);
    };
    const saveValues = (newMaxValue: number, startValue: number) => {
        setMaxValue(newMaxValue);
        setCount(startValue);
        SetMode(false);
    };

    return (
        <div className="App">
            {mode ? (
                <div className="display-set">
                    <label className={"label-max"}>
                        Max Value:
                        <input
                            type="number"
                            placeholder="Max value"
                            onChange={(e) => setMaxValue(Number(e.target.value))}
                        />
                    </label>
                    <label className={"label-start"}>
                        Start Value:
                        <input
                            type="number"
                            placeholder="Start value"
                            onChange={(e) => setCount(Number(e.target.value))}
                        />
                    </label>
                    <div className={"button-set"}>
                        <button onClick={() => saveValues(maxValue, count)}>set</button>
                    </div>

                </div>
            ) : (
                <>
                    <CounterDisplay maxValue={maxValue} value={count}/>
                    <CounterButtons
                        onIncrement={increment}
                        onReset={reset}
                        disableIncrement={count >= maxValue}
                        disableReset={count === 0}
                        onSet={toggleSetMode}
                    />
                </>
            )}
        </div>
    );
}

export default App;


