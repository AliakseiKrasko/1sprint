import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterDisplay} from './components/CounterDisplay';
import {CounterButtons} from './components/CountersButtons'

function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState<number>(10);

    useEffect(()=>{
        let valueAsStaring = localStorage.getItem('counterValue');
        if (valueAsStaring) {
            let newValue = JSON.parse(valueAsStaring);
            setCount(newValue);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count));
    }, [count])


    const increment = () => {
        setCount((prev) => (prev < maxValue ? prev + 1 : prev));
    };
    const reset = () => {
        setCount(0);
        setMaxValue(maxValue);
        // setMaxValue(Math.floor(Math.random() * 10) + 1);
    }

    const [maxError, setMaxError] = useState(false);
    const [startError, setStartError] = useState(false);
    const [startValue, setStartValue] = useState(0);

    useEffect(() => {
        let valueAsMax = localStorage.getItem('counterValueMax');
        if (valueAsMax) {
            let newValueAsMax = JSON.parse(valueAsMax);
            setMaxValue(newValueAsMax);
        }

    }, []);


    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(maxValue));
    }, [maxValue]);

    useEffect(() => {
        let valueAsStart = localStorage.getItem('counterValueStart');
        if (valueAsStart) {
            let newValueStart = JSON.parse(valueAsStart);
            setStartValue(newValueStart);
        }

    }, []);


    useEffect(() => {
        localStorage.setItem('counterValueStart', JSON.stringify(startValue));
    }, [startValue]);


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
                    <div className="set-mode">
                        <label className={"label-max"}>
                            Max Value:
                            <input
                                type="number"
                                value={maxValue}
                                className={maxError ? 'error' : ''}
                                placeholder="Max value"
                                onChange={(e) => {
                                    const value = Number(e.target.value);
                                    if (!isNaN(value) && value > 0) { // Проверка: число и больше 0

                                        setMaxValue(value);
                                        setMaxError(false);
                                        setStartError(false);

                                    } else {
                                        setMaxError(true);
                                        setStartError(true);
                                    }
                                }}
                            />
                        </label>
                        <label className={"label-start"}>
                            Start Value:
                            <input
                                type="number"
                                value={startValue}
                                className={startError ? 'error' : ''}
                                placeholder="Start value"
                                onChange={(e) => {
                                    const value = Number(e.target.value);
                                    if (!isNaN(value) && value >= 0 && value < maxValue) {

                                        setStartValue(value)
                                        setStartError(false);
                                        setMaxError(false);

                                    } else {
                                        setStartError(true);
                                        setMaxError(true);
                                    }
                                }}
                            />
                        </label>
                    </div>
                    <div className={"button-set"}>
                        <button
                            onClick={() => {
                                    saveValues(maxValue, startValue);
                                    setMaxError(false);
                                    setStartError(false);

                            }}
                        >
                            set
                        </button>
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


