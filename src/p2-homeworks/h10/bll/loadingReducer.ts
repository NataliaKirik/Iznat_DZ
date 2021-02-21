export type initStateType = {
    loadingValue: boolean
}
type LoadingACType = {
    type: 'IS_LOADING'
    loading: boolean
}

const initState = {
    loadingValue: false
}

export const loadingReducer = (state = initState, action: LoadingACType): initStateType => { // fix any
    switch (action.type) {
        case "IS_LOADING": {
            return {
                ...state,
                loadingValue: !action.loading
            }
        }
        default:
            return state;
    }
};

export const loadingAC = (boolean: boolean): LoadingACType => {
    return {type: 'IS_LOADING', loading: boolean}
};

// fix any