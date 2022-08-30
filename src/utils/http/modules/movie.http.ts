
import { FiltersWithPagination } from '../../../models/filters.model';
import { GetAllMoviesResponse, GetMovieByIdResponse, GetQuotesFromMovieResponse } from '../../../models/movie.model';
import { serverAxios } from '../http';
import { routerWithQuery } from '../route';

class MovieHttp {
  private static route = '/movie';

  public async getAll(filters?: FiltersWithPagination): Promise<GetAllMoviesResponse> {
    try {
      console.log(routerWithQuery(MovieHttp.route, filters));
      const { data } = await serverAxios.get(routerWithQuery(MovieHttp.route, filters));

      
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getById(movieID: string, filters?: FiltersWithPagination): Promise<GetMovieByIdResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${MovieHttp.route}/${movieID}`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getQuotesFrom(movieID: string, filters?: FiltersWithPagination): Promise<GetQuotesFromMovieResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${MovieHttp.route}/${movieID}/quote`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default MovieHttp;
