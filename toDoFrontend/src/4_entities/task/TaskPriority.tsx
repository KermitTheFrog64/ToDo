import { useEffect, useState } from "react"
import { Priority } from "../../5_shared/types"
import { useAppDispatch, useAppSelector } from "../../5_shared/hooks/redux"
import { fetchPriorities, getPriorities, updatePriority } from "../../2_widgets/task/task-slice"

interface TaskPriorityProps {
    priority?: Priority
    id: number
}

const TaskPriority: React.FC<TaskPriorityProps> = ({ priority, id }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPriorities())
    }, [])

    const priorities = useAppSelector(getPriorities)

    const [selectedValue, setSelectedValue] = useState<number>(priority ? priority.id : 0)

    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const priorityId = Number(event.target.value)
        setSelectedValue(priorityId)
        const selectedPriority = priorities.find((item) => item.id === priorityId)
        selectedPriority && dispatch(updatePriority({id, selectedPriority}))
    }

    return (
        <div>
            <label htmlFor="priority">Priority</label>

            <select name="priority" id="priority" onChange={handlePriorityChange} value={selectedValue} >
                {priorities.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>
        </div>
    )
}

//TODO: Группировка по приоритетам? Поиск по приоритетам?

export default TaskPriority