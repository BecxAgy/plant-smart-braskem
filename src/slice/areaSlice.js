import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import areaService from '../service/areaService'

const initialState = {
    areas: [],
    area: {},
    error: false,
    success: false,
    loading: false,
}

//slice get allareas
export const getAllareas = createAsyncThunk(
    'area/getall',
    async (_, thunkAPI) => {
        const data = await areaService.getAreas()
        return data
    },
)

export const areaSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        resetMessage: state => {
            state.message = null
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllareas.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getAllareas.fulfilled, (state, action) => {
                state.loading = false
                state.success = true
                state.error = null
                state.areas = action.payload
            })
    },
})

export const { resetMessage } = areaSlice.actions
export default areaSlice.reducer
