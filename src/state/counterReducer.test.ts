import {
    counterReducer,
    IncrimentCounterAC,
    ResetCounterAC,
    SaveValuesCounterAC,
    ToggleSetModeAC
} from './counterReducer';

test('increments counter if below maxValue', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState, IncrimentCounterAC(10))
    expect(endState.counter).toBe(1)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});

test('reset counter', () => {
    const startState = {counter: 5, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  ResetCounterAC(10))
    expect(endState.counter).toBe(0)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});

test('save values counter', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  SaveValuesCounterAC(5, 8))
    expect(endState.counter).toBe(5)
    expect(endState.maxValue).toBe(8)
    expect(endState.mode).toBe(false)
});

test('toggle set mode counter', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  ToggleSetModeAC(true))
    expect(endState.counter).toBe(0)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(true)
});