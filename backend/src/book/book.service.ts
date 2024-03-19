import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  async create(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.bookRepository.update(id, book);
    return this.bookRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
