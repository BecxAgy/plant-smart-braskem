import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import applicationService from '../service/applicationService'

const initialState = {
    status: {},
    error: false,
    success: false,
    loading: false,
}

//slice get allprojects
export const getState = createAsyncThunk('status/get', async (_, thunkAPI) => {
    debugger
    const data = await applicationService.getState()
    return data
})

export const stateSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        resetMessage: state => {
            state.message = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getState.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getState.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.status = action.payload
            })
    },
})

export const { resetMessage } = stateSlice.actions
export default stateSlice.reducer
