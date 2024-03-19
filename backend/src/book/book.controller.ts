import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(+id);
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.bookService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
    return this.bookService.update(+id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bookService.remove(+id);
  }
}
