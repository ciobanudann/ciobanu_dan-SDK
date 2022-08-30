import { GetAllChaptersResponse, GetChapterByIdResponse } from '../../../models/chapter.model';
import { FiltersWithPagination } from '../../../models/filters.model';
import { serverAxios } from '../http';
import { routerWithQuery } from '../route';

class ChapterHttp {
  private static route = '/chapter';

  public async getAll(filters?: FiltersWithPagination): Promise<GetAllChaptersResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(ChapterHttp.route, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getById(chapterID: string, filters?: FiltersWithPagination): Promise<GetChapterByIdResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${ChapterHttp.route}/${chapterID}`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ChapterHttp;
