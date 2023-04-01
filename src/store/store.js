import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../utils/userAuthApi'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        user: userReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware)
})

setupListeners(store.dispatch)