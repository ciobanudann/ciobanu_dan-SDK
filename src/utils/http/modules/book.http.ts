
import { GetAllBooksResponse, GetBookByIdResponse, GetBookChaptersResponse } from '../../../models/book.model';
import { FiltersWithPagination } from '../../../models/filters.model';
import { serverAxios } from '../http';
import { routerWithQuery } from '../route';

class BookHttp {
  private static route = '/book';

  public async getAll(filters?: FiltersWithPagination): Promise<GetAllBooksResponse>{
    try {
      const { data } = await serverAxios.get(routerWithQuery(BookHttp.route, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getById(bookID: string, filters?: FiltersWithPagination): Promise<GetBookByIdResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${BookHttp.route}/${bookID}`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getChapter(bookID: string, filters?: FiltersWithPagination): Promise<GetBookChaptersResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${BookHttp.route}/${bookID}/chapter`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default BookHttp;
