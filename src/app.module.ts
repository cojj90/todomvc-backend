import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { TodoNoteModule } from './todo-note/todo-note.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import ormconfig from './ormconfig'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    TodoNoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
