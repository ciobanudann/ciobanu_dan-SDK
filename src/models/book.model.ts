import { Chapter } from './chapter.model';
import { HttpResponse } from './http.model';

export type Book = {
  _id: string;
  name: string;
};

export type GetAllBooksResponse = HttpResponse<Book>;

export type GetBookByIdResponse = HttpResponse<Book>;

export type GetBookChaptersResponse = HttpResponse<Chapter>;
