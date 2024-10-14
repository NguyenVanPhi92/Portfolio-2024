// tạo reducer các case action
import { Action_REDUCER } from '../constants'

const Reducer = (state, action) => {
    switch (action.type) {
        case Action_REDUCER.DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            }
        default:
            return state
    }
}

export default Reducer
