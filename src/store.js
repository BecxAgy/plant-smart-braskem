import { configureStore } from '@reduxjs/toolkit'
import interventionReducer from './slice/interventionSlice'
import applicationReducer from './slice/applicationSlice'

export const store = configureStore({
    reducer: {
        intervention: interventionReducer,
        status: applicationReducer,
    },
})
