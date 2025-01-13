import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay';
import {CounterButtons} from './components/CountersButtons'
import {
    counterReducer,
    CounterState,
    incrimentCounterAC,
    resetCounterAC,
    saveValuesCounterAC, StateType, toggleSetModeAC, updateValuesAC
} from './state/counterReducer';

function AppReducer() {
    const [count, dispatch] = useReducer(counterReducer, CounterState);
    const [maxError, setMaxError] = useState(false);
    useEffect(() => {
        const storedState = localStorage.getItem('counterValue');
        if (storedState) {
            const parsedState: StateType = JSON.parse(storedState);
            dispatch(saveValuesCounterAC(parsedState.counter, parsedState.maxValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count));
    }, [count]);

    const increment = () => dispatch(incrimentCounterAC(count.maxValue));
    const reset = () => dispatch(resetCounterAC(count.maxValue));
    const toggleSetMode = () => dispatch(toggleSetModeAC(!count.mode));

    const handleMaxValueChange = (value: number) => {
        if (value > 0 && value > count.counter) {
            dispatch(updateValuesAC(value, count.counter));
            setMaxError(false);
        } else {
            setMaxError(true);
        }
    };

    const handleStartValueChange = (value: number) => {
        if (value >= 0 && value < count.maxValue) {
            dispatch(updateValuesAC(count.maxValue, value));
            setMaxError(false);
        } else {
            setMaxError(true);
        }
    };

    return (
        <div className="App">
            {count.mode ? (
                <div className="display-set">
                    <label>
                        Max Value:
                        <input
                            type="number"
                            placeholder="Max value"
                            className={maxError ? 'error' : ''}
                            value={count.maxValue}
                            onChange={(e) => handleMaxValueChange(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Start Value:
                        <input
                            type="number"
                            placeholder="Start value"
                            className={maxError ? 'error' : ''}
                            value={count.counter}
                            onChange={(e) => handleStartValueChange(Number(e.target.value))}
                        />
                    </label>
                    <button onClick={toggleSetMode}>Set</button>
                </div>
            ) : (
                <>
                    <CounterDisplay maxValue={count.maxValue} value={count.counter} />
                    <CounterButtons
                        onIncrement={increment}
                        onReset={reset}
                        disableIncrement={count.counter >= count.maxValue}
                        disableReset={count.counter === 0}
                        onSet={toggleSetMode}
                    />
                </>
            )}
        </div>
    );
}

export default AppReducer;


