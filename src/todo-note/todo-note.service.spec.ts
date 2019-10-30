import { Test, TestingModule } from '@nestjs/testing'
import { Repository } from 'typeorm'
import { TodoNote } from './todo-note.entity'
import { TodoNoteService } from './todo-note.service'
import { getRepositoryToken } from "@nestjs/typeorm";

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<TodoNote>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
}));

describe('TodoNoteService', () => {
  let service: TodoNoteService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoNoteService, { provide: getRepositoryToken(TodoNote), useFactory: repositoryMockFactory }]
    }).compile()

    service = module.get<TodoNoteService>(TodoNoteService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
