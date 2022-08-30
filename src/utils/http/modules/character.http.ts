import { GetAllCharactersResponse, GetCharacterByIdResponse, GetCharacterQuotesResponse } from '../../../models/character.model';
import { FiltersWithPagination } from '../../../models/filters.model';
import { serverAxios } from '../http';
import { routerWithQuery } from '../route';

class CharacterHttp {
  private static route = '/character';

  public async getAll(filters?: FiltersWithPagination): Promise<GetAllCharactersResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(CharacterHttp.route, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getById(characterID: string, filters?: FiltersWithPagination): Promise<GetCharacterByIdResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${CharacterHttp.route}/${characterID}`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getQuotesOf(characterID: string, filters?: FiltersWithPagination): Promise<GetCharacterQuotesResponse> {
    try {
      const { data } = await serverAxios.get(routerWithQuery(`${CharacterHttp.route}/${characterID}/quote`, filters));

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default CharacterHttp;
