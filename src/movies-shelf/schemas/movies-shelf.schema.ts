import * as mongoose from 'mongoose';
export const MoviesShelfSchema = new mongoose.Schema({
  name: String,
  name_en: String,
  rating: String,
  // theater: Types.ObjectId,
  director: String,
  // cast: string[];
  duration: String,
  release_date: String,
  poster: String,
  trailer: String,
  synopsis: String,
  genre: String,
});
