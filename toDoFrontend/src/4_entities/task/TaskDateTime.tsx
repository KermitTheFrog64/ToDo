interface TaskDateTimeProps {
    date_created: string
    time_in_progress?: string
    date_completed?: string
}

const TaskDateTime: React.FC<TaskDateTimeProps> = ({ date_created, time_in_progress, date_completed }) => {
    return (
        <div>
            Date of creation: {date_created}
        </div>

        /* TODO: Время в работе */

        /* TODO: Дата окончания */
    )
}

export default TaskDateTime