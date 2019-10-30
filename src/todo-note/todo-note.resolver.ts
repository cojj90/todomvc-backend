import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TodoNoteService } from './todo-note.service'
import { TodoNote } from './todo-note.entity'
import { CreateTodoNoteInput, UpdateTodoNoteInput, TodoNoteStatus} from './types'

@Resolver('TodoNote')
export class TodoNoteResolver {

    constructor(private readonly todoNoteService: TodoNoteService) {}

    @Query(() => [TodoNote])
    async todoNotes(
        @Args('first') first: number,
        @Args('after') after: number,
        @Args('status') status: TodoNoteStatus,
        ) {
      return await this.todoNoteService.findAll(first, after, status)
    }

    @Mutation(() => TodoNote)
    async createTodoNote(@Args('input') input: CreateTodoNoteInput) {
      return this.todoNoteService.create(input)
    }

    @Mutation(() => TodoNote)
    async updateTodoNote(@Args('input') input: UpdateTodoNoteInput) {
      return this.todoNoteService.update(input)
    }

    @Mutation(() => TodoNote)
    async clearCompleted() {
      return this.todoNoteService.clearCompleted()
    }
}
