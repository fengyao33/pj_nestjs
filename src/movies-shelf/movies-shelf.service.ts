import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMoviesShelfDto } from './dto/create-movies-shelf.dto';
import { UpdateMoviesShelfDto } from './dto/update-movies-shelf.dto';
import { MovieShelf } from './interfaces/movies-shelf.interface';

@Injectable()
export class MoviesShelfService {
  constructor(
    @Inject('MOVIESSHELF_MODEL')
    private readonly MoviesShelfModule: Model<MovieShelf>,
  ) {}

  async create(
    createMoviesShelfDto: CreateMoviesShelfDto,
  ): Promise<MovieShelf> {
    const createdMovies = this.MoviesShelfModule.create(createMoviesShelfDto);
    return createdMovies;
  }

  findAll() {
    return `This action returns all moviesShelf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviesShelf`;
  }

  update(id: number, updateMoviesShelfDto: UpdateMoviesShelfDto) {
    return `This action updates a #${id} moviesShelf`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviesShelf`;
  }
}
