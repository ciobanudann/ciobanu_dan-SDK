export type HttpResponse<T> = {
  docs: T[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
} | void;
