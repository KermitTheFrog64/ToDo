import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { updateDescription } from "../../2_widgets/task/task-slice"
import { useAppDispatch } from "../../5_shared/hooks/redux"

interface TaskDescriptionProps {
    description?: string
    id: number
}

const TaskDescription: React.FC<TaskDescriptionProps> = ({ description, id }) => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState<string>(description ? description : '')

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }], // Основные инструменты форматирования текста
            ['bold', 'italic', 'underline', 'strike'],
            ['clean'], // Очистка форматирования текста
            [{ 'font': [] }], // Выбор шрифта
            [{ 'size': ['small', false, 'large', 'huge'] }], // Выбор размера шрифта
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Вставка упорядоченных и неупорядоченных списков
            ['link'] // Вставка и редактирование ссылок
        ]
    }

    const formats = [
        'bold', 'italic', 'underline', 'strike', // Основные стили текста
        'font', 'size', // Шрифт и размер текста
        'list', 'bullet', // Списки
        'link', // Ссылки
    ]

    const handleChange = (description: string) => {
        setInputValue(description)
        dispatch(updateDescription({id, description}))

    }

    return (
        <ReactQuill
            theme="snow"
            value={inputValue}
            onChange={handleChange}
            modules={modules}
            formats={formats}
        />
    )
}

export default TaskDescription