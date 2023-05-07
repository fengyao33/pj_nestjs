type Rating = 'G' | 'PG' | 'R';
export class CreateMoviesShelfDto {
  name: string;
  name_en: string;
  rating: Rating;
  // theater: Types.ObjectId,
  director: string;
  // cast: string[];
  duration: string;
  release_date: string;
  poster: string;
  trailer: string;
  synopsis: string;
  genre: string;
}
