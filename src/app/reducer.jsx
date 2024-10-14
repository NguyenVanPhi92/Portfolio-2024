import { combineReducers } from 'redux'
import userReducer from './selector'

const rootReducer = combineReducers({
    userSlice: userReducer
})

export default rootReducer
