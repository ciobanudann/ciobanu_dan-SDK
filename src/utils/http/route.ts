import { FiltersWithPagination, FilterKeysEnum, FilterSign, FilterKeys } from '../../models/filters.model';

const getSign = (field: keyof FiltersWithPagination) => {
  switch (field) {
    case FilterKeysEnum.Match:
    case FilterKeysEnum.Include:
    case FilterKeysEnum.Exists:
    case FilterKeysEnum.Equal:
    case FilterKeysEnum.RegexMatch:
      return FilterSign.Equal;

    case FilterKeysEnum.NotMatch:
    case FilterKeysEnum.Exclude:
    case FilterKeysEnum.NotExists:
    case FilterKeysEnum.RegexNotMatch:
      return FilterSign.NotEqual;

    case FilterKeysEnum.Less:
      return FilterSign.Less;

    case FilterKeysEnum.LessOrEqual:
      return FilterSign.LessOrEqual;

    case FilterKeysEnum.Greater:
      return FilterSign.Greater;

    case FilterKeysEnum.GreaterOrEqual:
      return FilterSign.GreaterOrEqual;
  }
};

const getValue = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value.join(',');
  }

  return value;
};

export const buildQueryPrams = (filters: FiltersWithPagination): string => {
  const validFilters = Object.keys(filters).filter((key: string) => filters[key as FilterKeys]) as FilterKeys[];

  const query = validFilters.map((item) => {
    if (item === 'limit' || item === 'offset' || item === 'page') {
      return `${item}${FilterSign.Equal}${filters[item]}`;
    }

    const filter = filters[item];
    const sign = getSign(item);

    if (!filter?.value) {
      return `${filter?.field}`;
    }

    if (item === FilterKeysEnum.RegexMatch || item === FilterKeysEnum.RegexNotMatch) {
      return `${filter.field}${sign}/${filter.value}/i`;
    }

    const value = getValue(filter?.value);

    const field = filter?.field;

    return `${field}${sign}${value}`;
  });

  const matchesNotExists = validFilters.find((filter) => filter === FilterKeysEnum.NotExists);

  return `${matchesNotExists ? '?!' : '?'}${query.join('&')}`;
};

export const routerWithQuery = (route: string, filters?: FiltersWithPagination): string => {
  console.log(`${route}${buildQueryPrams(filters || {})}`);

  return `${route}${buildQueryPrams(filters || {})}`;
};
