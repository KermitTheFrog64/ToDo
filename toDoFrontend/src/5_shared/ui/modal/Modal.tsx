import React, { ReactNode } from "react"
import './modal.scss'

interface ModalProps {
    name: string
    children: ReactNode
    setIsModalOpen: (b: boolean) => void
    handleSubmit: () => void
}

const Modal: React.FC<ModalProps> = ({ name, children, setIsModalOpen, handleSubmit }) => {

    const onOutsideClick = () => {
      setIsModalOpen(false)
      handleSubmit()
    }

    const onButtonClick = () => {
      setIsModalOpen(false)
      handleSubmit()
    }

    return (
        <>
            <div className="darkBg" onClick={onOutsideClick} />

            <div className="modal" >

                <div className="modalHeader" >
                    <h5 className="heading" >{name}</h5>
                </div>

                <div className="modalContent" >
                    {children}
                </div>

                <div>
                    <button
                        className="closeBtn"
                        onClick={onButtonClick}
                    >
                        Close
                    </button>
                </div>

            </div>
        </>
    )
}

export default Modal