import { Module } from '@nestjs/common'
import { TodoNoteResolver } from './todo-note.resolver'
import { TodoNoteService } from './todo-note.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoNote } from './todo-note.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TodoNote])],
  providers: [TodoNoteResolver, TodoNoteService],
})
export class TodoNoteModule {}
