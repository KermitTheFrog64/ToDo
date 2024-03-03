import axios, { AxiosResponse } from "axios"

// Board API

export const fetchCurrentProjectRequest = async (id: number) => {
    try {
        const response: AxiosResponse = await axios.get(`http://localhost:3000/api/tasks/project/${id}`)
        return response.data
    }
    catch (error: any) {
        if (error.response) {
            console.error('Error Status:', error.response.status)
            console.error('Error Data:', error.response.data)
        }
        else if (error.request) {
            console.log(error.request)
        }
        else {
            console.log('Error', error.message)
        }
    }
}

//что отправляем на сервер?
export const reorderTasksRequest = async () => {
    try {
        const response: AxiosResponse = await axios.put('')
        return response.data
    }
    catch (error) {

    }
}

export const createTaskRequest = async (name: string) => {
    try {
        const response: AxiosResponse = await axios.post('http://localhost:3000/api/tasks/create', { name })
        return response.data
    }
    catch (error) {

    }
}