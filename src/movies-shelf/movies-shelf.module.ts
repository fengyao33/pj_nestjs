import { Module } from '@nestjs/common';
import { MoviesShelfService } from './movies-shelf.service';
import { MoviesShelfController } from './movies-shelf.controller';

@Module({
  controllers: [MoviesShelfController],
  providers: [MoviesShelfService]
})
export class MoviesShelfModule {}
