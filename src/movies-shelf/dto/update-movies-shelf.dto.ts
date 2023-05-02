import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesShelfDto } from './create-movies-shelf.dto';

export class UpdateMoviesShelfDto extends PartialType(CreateMoviesShelfDto) {}
