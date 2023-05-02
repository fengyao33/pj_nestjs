import * as mongoose from 'mongoose';

export const MoviesShelfSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
