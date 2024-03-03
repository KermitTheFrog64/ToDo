import axios, { AxiosResponse } from "axios"

// Subtasks API

export const fetchSubtasksRequest = async (id: number) => {
    try {
        const response: AxiosResponse = await axios.get(`http://localhost:3000/api/subtasks/task/${id}`)
        return response.data
    }
    catch (error) {

    }
}

export const toggleSubtasksRequest = async (id: number) => {
    try {
        const response: AxiosResponse = await axios.put(`http://localhost:3000/api/subtasks/${id}/toggle`)
        return response.data
    }
    catch (error) {

    }
}

export const addSubtasksRequest = async ({ id, name }: { id: number, name: string }) => {
    try {
        const response: AxiosResponse = await axios.post(`http://localhost:3000/api/subtasks/task/${id}/add`, name)
        return response.data
    }
    catch (error) {

    }
}

export const deleteSubtasksRequest = async (id: number) => {
    try {
        const response: AxiosResponse = await axios.delete(`http://localhost:3000/api/subtasks/${id}/delete`)
        return response.data
    }
    catch (error) {

    }
}