import { HttpResponse } from './http.model';
import { Quote } from './quote.model';

export type Movie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};

export type GetAllMoviesResponse = HttpResponse<Movie>;

export type GetMovieByIdResponse = HttpResponse<Movie>;

export type GetQuotesFromMovieResponse = HttpResponse<Quote>;
