
type StateType = {
    counter: number,
    maxValue: number,
    mode: boolean,
}
export const CounterState: StateType = {
    counter: 0,
    maxValue: 10,
    mode: false,
}

export type IncrimentCounter = {
    type: 'INCREASING_COUNTER',
    maxValue: number
}

export type ResetCounter = {
    type: 'RESET_COUNTER',
    maxValue: number,

}

export type SaveValuesCounter = {
    type: 'SAVE_VALUE',
    value: number,
    maxValue: number
}

export type ToggleSetMode = {
    type: 'TOGGLE_SET_MODE',
    mode: boolean
}

type ActionType = IncrimentCounter | ResetCounter | SaveValuesCounter | ToggleSetMode;


export const counterReducer = (state: StateType = CounterState, action: ActionType) => {
    switch (action.type) {
        case 'INCREASING_COUNTER':
            return {
                ...state,
                counter: state.counter < action.maxValue ? state.counter + 1 : state.counter,
            }
        case 'RESET_COUNTER':
            return {
                ...state,
                counter: 0, maxValue: 10
            }
            case 'SAVE_VALUE':
                return {
                    ...state,
                    counter: action.value, maxValue: action.maxValue
                }
                case 'TOGGLE_SET_MODE':
                    return {
                        ...state,
                        mode: action.mode
                    }

        default:
            return state;
    }
}