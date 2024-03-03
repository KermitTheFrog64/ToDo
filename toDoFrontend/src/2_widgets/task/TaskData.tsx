
import { TaskComments, TaskDateTime, TaskDescription, TaskFiles, TaskHeader, TaskPriority } from "../../4_entities/task"
import { TaskSubtasks } from "../subtasks"
import { Task } from "../../5_shared/types"

interface TaskProps {
    task: Task
}

const TaskData: React.FC<TaskProps> = ({ task }) => {
    return (
        <>
            <TaskHeader name={task.name} id={task.id} />

            <TaskDescription description={task.description} id={task.id} />

            <TaskDateTime
                date_created={task.date_created}
                time_in_progress={task.time_in_progress}
                date_completed={task.date_completed}
            />

            <TaskPriority priority={task.priority} id={task.id} />

            <TaskFiles />

            <TaskSubtasks id={task.id} />

            <TaskComments />
        </>
    )
}

export default TaskData