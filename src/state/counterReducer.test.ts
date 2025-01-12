import {counterReducer} from './counterReducer';

test('increments counter if below maxValue', () => {
    const startState = {counter: 0, maxValue: 10, mode: false};
    const endState = counterReducer(startState, {type: 'INCREASING_COUNTER', maxValue: 10})
    expect(endState.counter).toBe(1)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});

test('reset counter', () => {
    const startState = {counter: 5, maxValue: 10, mode: false};
    const endState = counterReducer(startState,  {type: 'RESET_COUNTER', maxValue: 10})
    expect(endState.counter).toBe(0)
    expect(endState.maxValue).toBe(10)
    expect(endState.mode).toBe(false)
});