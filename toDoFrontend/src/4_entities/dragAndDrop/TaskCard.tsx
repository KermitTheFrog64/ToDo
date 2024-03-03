import { Draggable } from "react-beautiful-dnd"
import { Task } from "../../5_shared/types"

interface TaskCardProps extends Task {
    index: number
    handleTaskClick: (id: number) => void
}

const TaskCard: React.FC<TaskCardProps> = ({ id, name, index, handleTaskClick }) => {   
    return (
        <Draggable draggableId={id.toString()} index={index} key={id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleTaskClick(id)}
                >
                    {name}
                </div>
            )}
        </Draggable>
    )
}

export default TaskCard