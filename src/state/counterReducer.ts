type StateType = {
    counter: number
}

export type IncrimentCounter = {
    type: 'INCREASING',

    maxValue: number
}

export const CounterState: StateType = {
    counter: 0,
}

type ActionType = IncrimentCounter;


export const counterReducer = (state: StateType = CounterState, action: ActionType) => {
    switch (action.type) {
        case 'INCREASING':
            return {
                ...state,
                counter: state.counter < action.maxValue ?  state.counter + 1 : state.counter,
            }

        default:
            return state;
    }
}