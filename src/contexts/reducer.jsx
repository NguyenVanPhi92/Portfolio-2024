import { ACTION_REDUCER } from '../constants'

// tạo reducer các case action
const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_REDUCER.DARK_MODE:
      return { ...state, darkMode: action.payload }
    default:
      return state
  }
}

export default Reducer
