export interface SubTask {
    id: number
    name: string
    ended: boolean
}

export interface TaskFile {
    id: number
    name: string
    url: string
}

export interface TaskComment {
    id: number
    text: string
    comments: TaskComment[]
}

export type PriorityType = 'none' | 'low' | 'medium' | 'high'

export interface Priority {
    id: number
    name: string
    type: PriorityType
}

export interface Status {
    id: number
    name: string
}

export interface Task {
    id: number
    name: string
    description?: string
    date_created: string
    time_in_progress?: string
    date_completed?: string
    priority?: Priority
    files?: TaskFile[]
    subtasks?: SubTask[]
    comments?: TaskComment[]
    status?: Status
    index?: number
}

export interface Colunms {
    'queue': Task[]
    'dev': Task[]
    'done': Task[]
}

export interface Project {
    id: number
    name: string
    columns?: Colunms
}