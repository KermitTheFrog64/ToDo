import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../5_shared/hooks/redux"
import { Modal } from "../../5_shared/ui/modal"
import { TaskData } from "."
import { fetchCurrentTask, getCurrentTask } from "./task-slice"


interface TaskModalProps {
    setIsModalOpen: (b: boolean) => void
    taskId: number
}

const TaskModal: React.FC<TaskModalProps> = ({ setIsModalOpen, taskId }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        taskId && dispatch(fetchCurrentTask(taskId))
    }, [taskId])

    const task = useAppSelector(getCurrentTask)

    const handleSubmit = () => {
        //TODO: дописать, что делаем при сабмите, связка со стейтом
        
    }

    if (!task) return

    return (
        <Modal name="Task's details" setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} >
            <TaskData task={task}/>
        </Modal>

    )
}

export default TaskModal