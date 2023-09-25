import { configureStore } from '@reduxjs/toolkit'
import interventionReducer from './slice/interventionSlice'

export const store = configureStore({
    reducer: {
        intervention: interventionReducer,
    },
})
