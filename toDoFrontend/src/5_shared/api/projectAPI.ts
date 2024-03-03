import axios, { AxiosResponse } from "axios"

// Project API

export const fetchProjectsRequest = async () => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:3000/api/projects')
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

// todo: REST & CRUD

export const createProjectRequest = async (name: string) => {
    try {
        const response: AxiosResponse = await axios.post('http://localhost:3000/api/projects', { name })
        return response.data
    }
    catch (error) {

    }
}