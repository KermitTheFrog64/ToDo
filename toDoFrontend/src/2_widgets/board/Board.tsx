import React, { useEffect, useState } from "react"
import { DragDropContext } from 'react-beautiful-dnd'
import { TasksColumn } from "../../5_shared/ui"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../5_shared/hooks/redux"
import { fetchCurrentProject, getCurrentBoard, reorderTasks } from "./board-slice"
import { TaskModal } from "../task"
import './board.scss'
import AddTaskModal from "./AddTaskModal"
import { AddButton } from "../../5_shared/ui/Buttons"

const Board: React.FC = () => {

    const dispatch = useAppDispatch()

    const { boardId } = useParams()

    useEffect(() => {
        dispatch(fetchCurrentProject(Number(boardId)))
    }, [])

    const board = useAppSelector(getCurrentBoard)
      
    const handleDragEnd = (result: any) => {
        console.log( result );        
        dispatch(reorderTasks())
    }

    ////////////////////////////////////////////////////////////////////

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [taskId, setTaskId] = useState<number>()

    const handleTaskClick = (id: number) => {
        setTaskId(id)
        setIsModalOpen(true)
    }

    /////////////////////////////////////////////////////////////////////

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)

    const handleAddTaskClick = () => {
        setIsAddModalOpen(true)
    }

    /////////////////////////////////////////////////////////////////////

    if (!board) return

    const { name, columns } = board

    console.log( board )
    
    
    return (
        <div>
            {name}
            <pre>{JSON.stringify(board, null, 2)}</pre>
            {/* <DragDropContext onDragEnd={handleDragEnd}>
                <div className="columns" >
                    <TasksColumn
                        id={'queue'}
                        name="Queue"
                        tasks={columns?.queue}
                        handleTaskClick={handleTaskClick}
                    />
                    <TasksColumn
                        id={'dev'}
                        name="Development"
                        tasks={columns?.dev}
                        handleTaskClick={handleTaskClick}
                    />
                    <TasksColumn
                        id={'done'}
                        name="Done"
                        tasks={columns?.done}
                        handleTaskClick={handleTaskClick}
                    />
                </div>
            </DragDropContext> */}
            <button onClick={() => dispatch(reorderTasks())}>test</button>

            {taskId && isModalOpen && <TaskModal setIsModalOpen={setIsModalOpen} taskId={taskId} />}

            <AddButton handleClick={handleAddTaskClick} />

            {isAddModalOpen && <AddTaskModal setIsModalOpen={setIsAddModalOpen} />}

        </div>
    )
}

export default Board