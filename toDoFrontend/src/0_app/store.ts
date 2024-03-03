import {configureStore} from '@reduxjs/toolkit'
import { boardSlice } from '../2_widgets/board'
import { projectsSlice } from '../2_widgets/projects'
import { subtaskSlice } from '../2_widgets/subtasks'
import { taskSlice } from '../2_widgets/task'


const store = configureStore({
    reducer: {
        board: boardSlice,
        projects: projectsSlice,
        task: taskSlice,
        subtask: subtaskSlice
    }
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store