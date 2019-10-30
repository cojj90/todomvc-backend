import { Test, TestingModule } from '@nestjs/testing'
import { TodoNoteResolver } from './todo-note.resolver'
import { TodoNoteService } from './todo-note.service'

class TodoNoteServiceMock {

 }

describe('TodoNoteResolver', () => {
  let resolver: TodoNoteResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoNoteResolver, { provide: TodoNoteService, useValue: TodoNoteServiceMock }],
    }).compile()

    resolver = module.get<TodoNoteResolver>(TodoNoteResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
