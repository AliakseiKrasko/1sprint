import {counterReducer} from './counterReducer';

test('INCREASING increments counter if below maxValue', () => {
    const startState = {counter: 0};
    const endState = counterReducer(startState, {type: 'INCREASING', maxValue: 10})
    expect(endState.counter).toBe(1)
});