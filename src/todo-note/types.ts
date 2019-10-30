export interface Node<T> {
    nodes: T[]
    totalCount: number
}

export interface CreateTodoNoteInput {
    note?: string
    isCompleted?: boolean
    isCleared?: boolean
}

export interface UpdateTodoNoteInput extends CreateTodoNoteInput {
    id: number
}

export enum TodoNoteStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CLEARED = 'CLEARED',
}
