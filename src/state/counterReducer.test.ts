import {
    counterReducer,
    incrimentCounterAC,
    resetCounterAC,
    saveValuesCounterAC,
    toggleSetModeAC, updateValuesAC
} from './counterReducer';

test('increments counter if below maxValue', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState, incrimentCounterAC(10))
    expect(endState.counter).toBe(1)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});

test('reset counter', () => {
    const startState = {counter: 5, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  resetCounterAC(10))
    expect(endState.counter).toBe(0)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});

test('save values counter', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  saveValuesCounterAC(5, 8))
    expect(endState.counter).toBe(5)
    expect(endState.maxValue).toBe(8)
    expect(endState.mode).toBe(false)
});

test('toggle set mode counter', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  toggleSetModeAC(true))
    expect(endState.counter).toBe(0)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(true)
});

test('update values counter', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  updateValuesAC(8, 5))
    expect(endState.counter).toBe(5)
    expect(endState.maxValue).toBe(8)
    expect(endState.mode).toBe(false)
});