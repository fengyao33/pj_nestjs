import { Mongoose } from 'mongoose';
import { MoviesShelfSchema } from './schemas/movies-shelf.schema';

export const moviesShelfProviders = [
  {
    provide: 'MOVIESSHELF_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('MoviesShelf', MoviesShelfSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
