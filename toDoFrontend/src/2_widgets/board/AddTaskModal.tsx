import { useState } from "react"
import { Modal } from "../../5_shared/ui/modal"
import { useAppDispatch } from "../../5_shared/hooks/redux"
import { createTask } from "./board-slice"

interface AddTaskModalProps {
    setIsModalOpen: (b: boolean) => void
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({setIsModalOpen}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: any) => {
      setInputValue(event.target.value)
    }

    const dispatch = useAppDispatch()

    const handleSubmit = () => {
      dispatch(createTask(inputValue))
    }
  return (
    <Modal name="New task" setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} >
        <input type="text" value={inputValue} onChange={handleChange} />
    </Modal>
  )
}

export default AddTaskModal