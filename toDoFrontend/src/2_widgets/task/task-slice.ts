import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Priority, Task } from "../../5_shared/types"
import { AppState } from "../../0_app/store"
import { fetchCurrentTaskRequest, fetchPrioritiesRequest, updateDescriptionRequest, updateHeaderRequest, updatePriorityRequest } from "../../5_shared/api/taskAPI"

interface InitialState {
    task: Task | null
    priorities: Priority[]

}

const initialState: InitialState = {
    task: null,
    priorities: []
}

export const fetchCurrentTask = createAsyncThunk('task/get', async (id: number) => {
    return await fetchCurrentTaskRequest(id)
})

export const fetchPriorities = createAsyncThunk('priority/get', async () => {
    return await fetchPrioritiesRequest()
})

export const updatePriority = createAsyncThunk('priority/put', async ({ id, selectedPriority }: { id: number, selectedPriority: Priority }) => {
    return await updatePriorityRequest(id, selectedPriority)
})

export const updateDescription = createAsyncThunk('description/put', async ({ id, description }: { id: number, description: string }) => {
    return await updateDescriptionRequest(id, description)
})

export const updateHeader = createAsyncThunk('header/put', async ({ id, name }: { id: number, name: string }) => {
    return await updateHeaderRequest(id, name)
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentTask.fulfilled, (state, { payload }: PayloadAction<Task | null>) => {
                if (payload) state.task = payload
            })
            .addCase(fetchPriorities.fulfilled, (state, { payload }: PayloadAction<Priority[]>) => {
                state.priorities = payload
            })
            .addCase(updatePriority.fulfilled, (state, { payload }: PayloadAction<Task>) => {
                state.task = payload
            })
            .addCase(updateDescription.fulfilled, (state, { payload }: PayloadAction<Task>) => {
                state.task = payload
            })
            .addCase(updateHeader.fulfilled, (state, { payload }: PayloadAction<Task>) => {
                state.task = payload
            })
    }
})

export const getCurrentTask = (state: AppState) => state.task.task

export const getPriorities = (state: AppState) => state.task.priorities

export default taskSlice.reducer