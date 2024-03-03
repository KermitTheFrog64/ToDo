import axios, { AxiosResponse } from "axios"
import { Priority } from "../types"

// Task API

export const fetchCurrentTaskRequest = async (id: number) => {
    try {
        const response: AxiosResponse = await axios.get(`http://localhost:3000/api/tasks/${id}`)
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

export const fetchPrioritiesRequest = async () => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:3000/api/priorities/')
        return response.data
    }
    catch (error) {

    }
}

export const updatePriorityRequest = async (id: number, selectedPriority: Priority) => {
    try {
        const response: AxiosResponse = await axios.put(`http://localhost:3000/tasks/${id}/update-priority`, {
            id,
            selectedPriority
        })
        return response.data
    }
    catch (error) {

    }
}

export const updateDescriptionRequest = async (id: number, description: string) => {
    try {
        const response: AxiosResponse = await axios.put(`http://localhost:3000/tasks/${id}/update-description`, {
            id,
            description
        })
        return response.data
    }
    catch (error) {

    }
}

export const updateHeaderRequest = async (id: number, header: string) => {
    try {
        const response: AxiosResponse = await axios.put(`http://localhost:3000/tasks/${id}/update-header`, {
            id,
            header
        })
        return response.data
    }
    catch (error) {

    }
}

