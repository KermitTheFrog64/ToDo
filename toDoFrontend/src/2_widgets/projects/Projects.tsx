import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../5_shared/hooks/redux"
import { fetchProjects, getProjects } from "./projects-slice"
import { useNavigate } from "react-router-dom"
import { AddButton } from "../../5_shared/ui/Buttons"
import { AddProjectModal } from "."
import { Project } from "../../5_shared/types"

const Projects: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    const projects = useAppSelector(getProjects)

    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleAddProjectClick = () => {
        setIsModalOpen(true)
    }

    return (
        <div>
            {
                projects.map((p: Project) =>
                    <div
                        key={p.id}
                        onClick={() => navigate(`/boards/${p.id}`)}
                    >
                        {p.name}
                    </div>)
            }

            <AddButton handleClick={handleAddProjectClick} />

            {isModalOpen && <AddProjectModal setIsModalOpen={setIsModalOpen} />}
        </div>
    )
}

export default Projects