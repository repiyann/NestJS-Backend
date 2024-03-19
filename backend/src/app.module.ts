import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.entity';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tes-nest',
      entities: [Book],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
