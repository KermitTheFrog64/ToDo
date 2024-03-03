import './buttons.scss'

interface DeleteButtonProps {
    handleClick: (event: any) => void
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ handleClick }) => {
    return (
        <span className="material-symbols-outlined" onClick={handleClick}>
            delete
        </span>
    )
}

export default DeleteButton