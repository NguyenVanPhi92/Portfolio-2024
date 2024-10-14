import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: [],

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: '1',
                text: action.payload
            }
            state.push(todo)
        }
    }
})

// this is for dispatch
export const { addTodo } = userSlice.actions

// this is for configureStore
export default userSlice.reducer
