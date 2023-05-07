import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesShelfService } from './movies-shelf.service';
import { CreateMoviesShelfDto } from './dto/create-movies-shelf.dto';
import { UpdateMoviesShelfDto } from './dto/update-movies-shelf.dto';

@Controller('api/admin/moviesShelf')
export class MoviesShelfController {
  constructor(private readonly moviesShelfService: MoviesShelfService) {}

  @Post()
  create(@Body() createMoviesShelfDto: CreateMoviesShelfDto) {
    return this.moviesShelfService.create(createMoviesShelfDto);
  }

  @Get()
  findAll() {
    return this.moviesShelfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesShelfService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMoviesShelfDto: UpdateMoviesShelfDto,
  ) {
    return this.moviesShelfService.update(+id, updateMoviesShelfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesShelfService.remove(+id);
  }
}
