import {createBrowserRouter} from 'react-router-dom'
import { HomePage, BoardPage } from '../1_pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/boards/:boardId',
        element: <BoardPage />
    }
])

export default router