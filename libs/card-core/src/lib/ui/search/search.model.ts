export const dataSource = [
  { id: '1',name: 'Richard', age: 25, answer: 'no' } ,
  { id: '2',name: 'Fero', age: 25, answer: 'no' },
  { id: '3',name: 'Jozo', age: 25, answer: 'yes' },
  { id: '4',name: 'brano', age: 25, answer: 'no' },
  { id: '5',name: 'Vierka', age: 25, answer: 'yes' },
]
export interface TableConfig<T> {
  displayedColumns: string[];
  placeholder: string;
  category: string;
  icon: string;
  dataSource: T[];
}

export enum DataSourceCategory {
  Empty = 'empty',
}

export interface SearchData {
  id: string;
  name: string;
}

export function identity<T>(value: T): T {
  console.log(value)
  return value;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}


identity<SearchData[]>(dataSource);
