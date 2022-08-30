import { HttpResponse } from './http.model';

export type Chapter = {
  _id: string;
  chapterName: string;
  book?: string;
};

export type GetAllChaptersResponse = HttpResponse<Chapter>;

export type GetChapterByIdResponse = HttpResponse<Chapter>;
