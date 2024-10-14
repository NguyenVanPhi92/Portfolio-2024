import { createContext, useReducer } from 'react'
import Reducer from './reducer'

const INITIAL_STATE = {
    darkMode: 'dark',
    isLoggedIn: false,
    token: ''
}

// tạo context (store) và gán state là giá trị khởi tạo
export const MyContext = createContext(INITIAL_STATE)

// Context wrapper App: App sẽ là children
export const MyAppContext = ({ children }) => {
    // dùng Reducer để trả về state và dispatch
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    return (
        <MyContext.Provider
            // đưa các state dùng chung ra phạm vi global (all app đều dùng đc state này)
            value={{
                darkMode: state.darkMode,
                isLoggedIn: state.isLoggedIn,
                token: state.token,
                dispatch
            }}
        >
            {children}
        </MyContext.Provider>
    )
}
