import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubTask } from "../../5_shared/types";
import { AppState } from "../../0_app/store";
import { addSubtasksRequest, deleteSubtasksRequest, fetchSubtasksRequest, toggleSubtasksRequest } from "../../5_shared/api/subtaskAPI";

interface InitialState {
    subtasks: SubTask[]
}

const initialState: InitialState = {
    subtasks: []
}

export const fetchSubtasks = createAsyncThunk('subtasks/get', async (id: number) => {
    return await fetchSubtasksRequest(id)
})

export const toggleSubtask = createAsyncThunk('subtask/put', async (id: number) => {
    return await toggleSubtasksRequest(id)
})

export const addSubtask = createAsyncThunk('subtask/post', async ({ id, name }: { id: number, name: string }) => {
    return await addSubtasksRequest({ id, name })
})

export const deleteSubtask = createAsyncThunk('subtask/delete', async (id: number) => {
    return await deleteSubtasksRequest(id)
})

export const subtaskSlice = createSlice({
    name: 'subtask',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubtasks.fulfilled, (state, { payload }: PayloadAction<SubTask[]>) => {
                state.subtasks = payload
            })
            .addCase(toggleSubtask.fulfilled, (state, { payload }: PayloadAction<SubTask>) => {
                state.subtasks = state.subtasks.map((item) => item.id === payload.id ? item = payload : item)
            })
            .addCase(addSubtask.fulfilled, (state, { payload }: PayloadAction<SubTask>) => {
                state.subtasks.push(payload)
                // state.subtasks = [ ...state.subtasks ]
            })
            .addCase(deleteSubtask.fulfilled, (state, { payload }: PayloadAction<SubTask>) => {
                state.subtasks = state.subtasks.filter((item) => item.id !== payload.id)
            })
    }
})

export const getSubtasks = (state: AppState) => state.subtask.subtasks

export default subtaskSlice.reducer