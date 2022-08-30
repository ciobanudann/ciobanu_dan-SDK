import { HttpResponse } from './http.model';

export type Quote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export type GetAllQuotesResponse = HttpResponse<Quote>;

export type GetQuoteByIdResponse = HttpResponse<Quote>;
