import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import projectService from "../service/projectService";

const initialState = {
   projects: [],
   project: {},
    error: false,
    success: false,
    loading: false,
    
}


//slice get allprojects
export const getAllProjects = createAsyncThunk("project/getall", async (_, thunkAPI) => {
    
    const data = await projectService.getProjetos();
    return data;
})




export const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllProjects.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getAllProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.success= true;
            state.error = null;
            state.projetos = action.payload;
        })
       
        
    }
    
})

export const {resetMessage} =projectSlice.actions;
export default projectSlice.reducer;