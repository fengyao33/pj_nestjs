import { Module } from '@nestjs/common';
import { MoviesShelfService } from './movies-shelf.service';
import { MoviesShelfController } from './movies-shelf.controller';
import { moviesShelfProviders } from './movies-shelf.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesShelfController],
  providers: [MoviesShelfService, ...moviesShelfProviders],
})
export class MoviesShelfModule {}
