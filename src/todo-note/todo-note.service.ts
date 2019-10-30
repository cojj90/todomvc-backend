import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, MoreThan } from 'typeorm'
import { TodoNote } from './todo-note.entity'
import { CreateTodoNoteInput, UpdateTodoNoteInput, TodoNoteStatus, Node } from './types'

export interface PageInfo {
    hasNextPage: boolean
    startCursor: number
    endCursor: number
}

@Injectable()
export class TodoNoteService {
    constructor(
        @InjectRepository(TodoNote)
        private readonly todoNoteRepository: Repository<TodoNote>,
    ) { }

    private async hasNextPage(cursor): Promise<boolean> {
        const notes = await this.todoNoteRepository.findOne({
            where: {
                id: MoreThan(cursor),
            },
            order: {
                id: 'ASC',
            },
        })
        return notes != null
    }

    private async isAlreadySaved(id): Promise<boolean> {
        const note = await this.todoNoteRepository.findOne({
            where: { id },
        })
        return (note != null) ? true : false
    }

    async findAll(first: number = 200, after: number = 0, status: TodoNoteStatus): Promise<{ pageInfo: PageInfo, node: Node<TodoNote>}> {
        let dynamicWhereClase: Record<string, boolean> = { isCleared: false }
        if (status === TodoNoteStatus.CLEARED) { dynamicWhereClase = { ...dynamicWhereClase, isCleared: true} }
        if (status === TodoNoteStatus.COMPLETED) { dynamicWhereClase = { ...dynamicWhereClase, isCompleted: true } }
        if (status === TodoNoteStatus.PENDING) { dynamicWhereClase = { ...dynamicWhereClase, isCompleted: false } }

        const notes = await this.todoNoteRepository.find({
            where: {
                id: MoreThan(after),
                ...dynamicWhereClase,
            },
            order: {
                id: 'ASC',
            },
            take: first,
        })
        if (notes.length === 0) {
            return {
                pageInfo: {
                    hasNextPage: false,
                    startCursor: null,
                    endCursor: null,
                },
                node: {
                    totalCount: 0,
                    nodes: [],
                },
            }
        }
        const startCursor = notes[0].id || null
        const endCursor = notes[notes.length - 1].id || null
        return {
            pageInfo: {
                hasNextPage: await this.hasNextPage(endCursor),
                startCursor,
                endCursor,
            },
            node: {
                totalCount: notes.length,
                nodes: notes,
            },
        }
    }

    async create(input: CreateTodoNoteInput) {
        return this.todoNoteRepository.save({
            ...input,
        })
    }

    async update(input: UpdateTodoNoteInput) {
        const { id: noteId } = input
        if (await this.isAlreadySaved(noteId) === false) { return null }
        return this.todoNoteRepository.save({
            ...input,
        })
    }

    async clearCompleted() {
        try {
            await this.todoNoteRepository
                .createQueryBuilder()
                .update(TodoNote)
                .set({ isCleared: true })
                .where('isCompleted = :isCompleted', { isCompleted: true })
                .execute()
            return true
        } catch {
            return false
        }
    }
}
