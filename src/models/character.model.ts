import { HttpResponse } from './http.model';
import { Quote } from './quote.model';

export type Character = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};

export type GetAllCharactersResponse = HttpResponse<Character>;

export type GetCharacterByIdResponse = HttpResponse<Character>;

export type GetCharacterQuotesResponse = HttpResponse<Quote>;
