import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './selector'

export default configureStore({
    reducer: {
        users: userSlice
    }
})
