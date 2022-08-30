export enum FilterSign {
  Equal = '=',
  NotEqual = '!=',
  NotExists = '?!',
  Less = '<',
  Greater = '>',
  GreaterOrEqual = '>=',
  LessOrEqual = '<=',
  Exists = '',
}

export type Filter = {
  field: string;
  value?: string | string[];
};

export enum FilterKeysEnum {
  Match = 'match',
  NotMatch = 'notMatch',
  Include = 'include',
  Exclude = 'exclude',
  Exists = 'exists',
  NotExists = 'notExists',
  Less = 'less',
  LessOrEqual = 'lessOrEqual',
  Greater = 'greater',
  GreaterOrEqual = 'greaterOrEqual',
  Equal = 'equal',
  RegexMatch = 'regexMatch',
  RegexNotMatch = 'regexNotMatch',

}

export type Filters = {
  [key in FilterKeysEnum]?: Filter;
};

export type FiltersWithPagination = Filters & {
  page?: number;
  offset?: number;
  limit?: number;
};

export type FilterKeys = keyof FiltersWithPagination;
