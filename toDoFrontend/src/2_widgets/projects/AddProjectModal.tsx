import { useState } from "react"
import { useAppDispatch } from "../../5_shared/hooks/redux"
import { createProject } from "./projects-slice"
import { Modal } from "../../5_shared/ui/modal"

interface AddProjectModalProps {
    setIsModalOpen: (b: boolean) => void
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({setIsModalOpen}) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    dispatch(createProject(inputValue))
  }

  return (
    <Modal name="New project" setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} >
        <input type="text" value={inputValue} onChange={handleChange}/>
    </Modal>
  )
}

export default AddProjectModal