type Rating = 'G' | 'PG' | 'R';
export class CreateMoviesShelfDto {
  canme: string;
  ename: string;
  rating: Rating;
  // theater: Types.ObjectId,
  director: string;
  actor: string[];
  Length: string;
  comeout: string;
  premiere: string;
  trailer: string;
  story: string;
}
