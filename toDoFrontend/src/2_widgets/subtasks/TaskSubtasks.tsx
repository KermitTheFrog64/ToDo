import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../5_shared/hooks/redux"
import { addSubtask, fetchSubtasks, getSubtasks, deleteSubtask, toggleSubtask } from "./subtask-slice"
import './subtasks.scss'
import DeleteButton from "../../5_shared/ui/Buttons/DeleteButton"

interface TaskSubtasksProps {
    id: number
}

const TaskSubtasks: React.FC<TaskSubtasksProps> = ({ id }) => {

    const disparch = useAppDispatch()

    useEffect(() => {
      disparch(fetchSubtasks(id))
    }, [])

    const subtasks = useAppSelector(getSubtasks)

    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleAddClick = () => {
        disparch(addSubtask({ id, name: inputValue }))
        setInputValue('')
    }

    const handleSubtaskClick = (event: any) => {
        disparch(toggleSubtask(event.target.id))
        //TODO: НЕ РАБОТАЕТ 
        
    }

    const handleDeleteClick = (event: any) => {
      disparch(deleteSubtask(event.target.id))
    }

    //TODO: добавить сортировку по выполненным и невыполненным, сокрытие выполненных и удаление всех выполненных + удаление каждой отдельной

    if (!subtasks) return

    return (
        <>
            <div>Subtasks:</div>
            <ul>
                {subtasks.map((item) => <li
                    key={item.id}
                    id={item.id.toString()}
                    onClick={handleSubtaskClick}
                    className={item.ended ? 'checked' : ''}
                >
                    {item.name}
                    <DeleteButton handleClick={handleDeleteClick} />
                </li>)}
            </ul>
            <input
                type="text"
                placeholder="Subtusk"
                value={inputValue}
                onChange={handleInputChange}
            />
            <span onClick={handleAddClick} >Add</span>
        </>
    )
}

export default TaskSubtasks