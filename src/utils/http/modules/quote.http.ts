
import { FiltersWithPagination } from '../../../models/filters.model';
import { GetAllQuotesResponse, GetQuoteByIdResponse } from '../../../models/quote.model';
import { serverAxios } from '../http';
import { routerWithQuery } from '../route';

class QuoteHttp {
  private static route = '/quote';

  public async getAll(filters?: FiltersWithPagination): Promise<GetAllQuotesResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(QuoteHttp.route, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getById(quoteID: string, filters?: FiltersWithPagination): Promise<GetQuoteByIdResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${QuoteHttp.route}/${quoteID}`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default QuoteHttp;
