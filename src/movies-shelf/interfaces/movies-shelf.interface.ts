import { Document } from 'mongoose';
type Rating = 'G' | 'PG' | 'R';
export interface MovieShelf extends Document {
  name: string;
  name_en: string;
  rating: Rating;
  // theater: Types.ObjectId,
  director: string;
  duration: string[];
  release_date: string;
  poster: string;
  trailer: string;
  synopsis: string;
  genre: string;
}
