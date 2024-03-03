import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Project } from "../../5_shared/types";
import { AppState } from "../../0_app/store";
import { createProjectRequest, fetchProjectsRequest } from "../../5_shared/api/projectAPI";

interface InitialState {
    projects: Project[]
}

const initialState: InitialState = {
    projects: []
}

export const fetchProjects = createAsyncThunk('projects/getProjects', async () => {
    return await fetchProjectsRequest()
})

export const createProject = createAsyncThunk('projects/post',async (name: string) => {
    return await createProjectRequest(name)
})

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.fulfilled, (state, {payload}: PayloadAction<Project[]>) => {
                if ( Array.isArray( payload ) ) {
                    state.projects = payload
                }                
            })
            .addCase(createProject.fulfilled, (state, {payload}: PayloadAction<Project>) => {
                state.projects.push(payload)
            })
    }
})

export const getProjects = (state: AppState) => state.projects.projects

export default projectsSlice.reducer