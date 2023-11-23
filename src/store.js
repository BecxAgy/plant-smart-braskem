import { configureStore } from '@reduxjs/toolkit'
import interventionReducer from './slice/interventionSlice'
import applicationReducer from './slice/applicationSlice'
import projectReducer from './slice/projectSlice'
import areaReducer from './slice/areaSlice'

export const store = configureStore({
    reducer: {
        intervention: interventionReducer,
        status: applicationReducer,
        project: projectReducer,
        area: areaReducer,
    },
})
