import React, { useState } from "react"
import { useAppDispatch } from "../../5_shared/hooks/redux"
import { updateHeader } from "../../2_widgets/task/task-slice"

interface TaskHeaderProps {
    name: string
    id: number
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ name, id }) => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState<string>(name)

    const handleInputChange = (event: any) => {
      setInputValue(event.target.value)
      dispatch(updateHeader({id, name: inputValue}))
    }

    return (
        <input
            type="text"
            placeholder="Header"
            value={inputValue}
            onChange={handleInputChange}
            required
        />
    )
}

export default TaskHeader