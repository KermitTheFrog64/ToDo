import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Status, Project, Task, Colunms } from "../../5_shared/types"
import { AppState } from "../../0_app/store"
import { createTaskRequest, fetchCurrentProjectRequest } from "../../5_shared/api/boardAPI"

interface InitialState {
    board: Project | null
    statuses: Status[]
}

const initialState: InitialState = {
    board: null,
    statuses: []
}

export const fetchCurrentProject = createAsyncThunk('board/get', async (id: number) => {
    return await fetchCurrentProjectRequest(id)
})

/* export const reorderTasks = createAsyncThunk('board/put', async (id: number, source: Droppable, destination: Droppable) => {
    if (source.droppableId === destination.droppableId) {
        
    }
    else {

    }
}) */

export const createTask = createAsyncThunk('board/post', async (name: string) => {
    return await createTaskRequest(name)
})

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        reorderTasks: (state) => {
            // const { draggableId, source, destination } = action.payload          
            console.log( state.board );
            
            /*
            if (source && destination && state?.board && state.board.columns) {

                const { columns } = state.board
 
                const areSameColumns = source.droppableId === destination.droppableId

                const sourceColumn = columns[source.droppableId as keyof Colunms]
                
                const destinationColumn = columns[destination.droppableId as keyof Colunms]
                
                if (sourceColumn) {

                    const findTask = sourceColumn.find(task => task.id === Number(draggableId))
                    
                    sourceColumn.splice(source.index, 1)

                    if (areSameColumns && findTask) {
                        sourceColumn.splice(destination.index, 0, findTask)
                    }

                    if (!areSameColumns && destinationColumn && findTask) {
                        destinationColumn.splice(destination.index, 0, findTask)
                    }

                }
            

            }
            */
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentProject.fulfilled, (state, { payload }: PayloadAction<Project | null>) => {
                if (payload) {
                    state.board = payload
                }
            })
            .addCase(createTask.fulfilled, (state, { payload }: PayloadAction<Task>) => {
                state.board?.columns?.queue.push(payload)
            })
    }
})

export const getCurrentBoard = (state: AppState) => state.board.board

export const { reorderTasks } = boardSlice.actions

export default boardSlice.reducer