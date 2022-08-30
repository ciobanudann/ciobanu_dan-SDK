# Modules
## Usage
```
const http = useHttp();

http.[moduleName].[moduleMethod](params)
```

# Types
```
Filter = {
  field: string;
  value: string | string[];
};

FiltersWithPagination: {
  match: Filter,
  notMatch: Filter,
  include: Filter,
  exclude: Filter,
  exists: Filter,
  notExists: Filter,
  less: Filter,
  lessOrEqual: Filter,
  greater: Filter,
  greaterOrEqual: Filter,
  equal: Filter,
  regex: Filter,
  page: number;
  offset: number;
  limit: number;
}
```

#Methods
* ### Common
```
getAll(filters?: FiltersWithPagination)
getById(id: string)
```
* ### Book
```
getChapterById(id: string)
```
* ### Character
```
getQuotesByCharacterId(id: string)
```
* ### Movie
```
getQuotesFrom(id: string)
```
* ### Chapter 
* ### Quote 
