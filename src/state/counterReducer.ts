type stateType = {
    counter: number
}

export type IncrimentCounter = {
    type: 'INCREASING',

    maxValue: number
}

/*export type DecrementCounter = {
    type: 'DECREMENT',
    maxValue: number
}*/


type ActionType = IncrimentCounter;


export const counterReducer = (state: stateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREASING':
            return {
                ...state,
                counter: state.counter < action.maxValue ?  state.counter + 1 : state.counter,
            }
        /*case 'DECREMENT':
            return {
                ...state,
                counter: state.counter < action.maxValue ?  state.counter - 1 : state.counter,
            }*/
        default:
            return state;
    }
}