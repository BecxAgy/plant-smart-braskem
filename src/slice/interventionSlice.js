import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import interventionService from '../service/interventionService'

const initialState = {
    interventions: [],
    intervention: {},
    error: false,
    success: false,
    loading: false,
}

//slice get all projetos
export const getAllInterventions = createAsyncThunk(
    'intervention/getall',
    async (_, thunkAPI) => {
        debugger
        const data = await interventionService.getInterventions()
        console.log()
        return data[0]
    },
)

export const downloadPdfIso = createAsyncThunk(
    'intervention/download',
    async (fileId, thunkAPI) => {
        debugger
        const data = await interventionService.downloadPdf(fileId)

        return data
    },
)

export const interventionSlice = createSlice({
    name: 'intervention',
    initialState,
    reducers: {
        resetMessage: state => {
            state.message = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllInterventions.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getAllInterventions.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.interventions = action.payload
            })
            .addCase(downloadPdfIso.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(downloadPdfIso.fulfilled, state => {
                state.loading = false
                state.success = true
                state.error = null
            })
    },
})

export const { resetMessage } = interventionSlice.actions
export default interventionSlice.reducer
