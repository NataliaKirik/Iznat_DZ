type changeThemeCActionType = {
    type: 'CHANGE-THEME'
    colour: string
}
type initStateType = {
    selectedTheme: string
}

const initState = {
    selectedTheme: 'green'
};

export const themeReducer = (state: initStateType = initState, action: changeThemeCActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, selectedTheme: action.colour}
        }
        default:
            return state;
    }
};

export const changeThemeC = (option: string): changeThemeCActionType => {
    return {
        type: 'CHANGE-THEME',
        colour: option
    }
}; // fix any