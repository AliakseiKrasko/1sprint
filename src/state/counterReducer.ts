export type StateType = {
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

export type UpdateValuesAction = {
    type: 'UPDATE_VALUES';
    maxValue: number;
    startValue: number;
};


type ActionType = IncrimentCounter | ResetCounter | SaveValuesCounter | ToggleSetMode | UpdateValuesAction;


export const counterReducer = (state: StateType = CounterState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASING_COUNTER':
            return {
                ...state,
                counter: state.counter < action.maxValue ? state.counter + 1 : state.counter,
            }
        case 'RESET_COUNTER':
            return {
                ...state,
                counter: 0,
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
        case 'UPDATE_VALUES':
            return {
                ...state,
                maxValue: action.maxValue,
                counter: action.startValue,
            };


        default:
            return state;
    }
}

export const incrimentCounterAC = (maxValue: number): IncrimentCounter => {
    return {type: 'INCREASING_COUNTER', maxValue: maxValue}
}

export const resetCounterAC = (maxValue: number): ResetCounter => {
    return {type: 'RESET_COUNTER', maxValue: maxValue}
}

export const saveValuesCounterAC = (value: number, maxValue: number): SaveValuesCounter => {
    return {type: 'SAVE_VALUE', value: value, maxValue: maxValue}
}

export const toggleSetModeAC = (mode: boolean): ToggleSetMode => {
    return {type: 'TOGGLE_SET_MODE', mode: mode}
}

export const updateValuesAC = (maxValue: number, startValue: number): UpdateValuesAction => {
    return {type: 'UPDATE_VALUES', maxValue, startValue}
};