import * as tabActionTypes from './tabActions'

const initialState = {
    selectedTab: ""
}

const tabReducers = (state = initialState, action) => {
    switch(action.type) {
        case tabActionTypes.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default: 
            return state
    }
}

export default tabReducers;