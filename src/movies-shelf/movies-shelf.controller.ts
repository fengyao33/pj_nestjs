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

@Controller('admin/moviesShelf')
export class MoviesShelfController {
  constructor(private readonly moviesShelfService: MoviesShelfService) {}

  //新增電影
  @Post()
  create(@Body() createMoviesShelfDto: CreateMoviesShelfDto) {
    return this.moviesShelfService.create(createMoviesShelfDto);
  }

  //取得所有電影
  @Get()
  findAll() {
    return this.moviesShelfService.findAll();
  }

  @Get(':release_date')
  findOne(@Param() release_date: string) {
    console.log(1111);
    return this.moviesShelfService.findOne(release_date);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMoviesShelfDto: UpdateMoviesShelfDto,
  // ) {
  //   return this.moviesShelfService.update(+id, updateMoviesShelfDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moviesShelfService.remove(+id);
  // }
}
