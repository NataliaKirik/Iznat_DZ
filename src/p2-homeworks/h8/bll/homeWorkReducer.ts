import {initialPeopleType, actionType} from "../HW8";

export const homeWorkReducer = (state: Array<initialPeopleType>, action: actionType): Array<initialPeopleType> => {
    switch (action.type) {
        case "sort": {
            let copyState = [...state]
            action.payload === "up" ? copyState.sort((a, b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA < nameB) {
                    return -1
                } else if (nameA > nameB) {
                    return 1
                }
                return 0
            }) : copyState.sort((a, b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA < nameB) {
                    return 1
                } else if (nameA > nameB) {
                    return -1
                }
                return 0
            })

            return copyState
        }
        case "check": {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
};