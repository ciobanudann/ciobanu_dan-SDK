import BookHttp from './modules/book.http';
import ChapterHttp from './modules/chapter.http';
import MovieHttp from './modules/movie.http';
import QuoteHttp from './modules/quote.http';
import CharacterHttp from './modules/character.http';

const book = new BookHttp();
const chapter = new ChapterHttp();
const movie = new MovieHttp();
const quote = new QuoteHttp();
const character = new CharacterHttp();

type HttpHook = {
  book: BookHttp;
  chapter: ChapterHttp;
  movie: MovieHttp;
  quote: QuoteHttp;
  character: CharacterHttp;
};

const useHttp = (): HttpHook => {
  return { book, chapter, movie, quote, character };
};

export default useHttp;
