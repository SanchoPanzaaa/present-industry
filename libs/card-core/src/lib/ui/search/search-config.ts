import { TableConfig, SearchData } from "./search.model";

export const searchConfigDefault: TableConfig<SearchData> = {
  category: 'search-default',
  placeholder: 'Vloz pismena',
  icon: 'search',
  displayedColumns: ['id','name','age'],
  dataSource: <SearchData[]> [
      { id: '1',name: 'Richard'} ,
      { id: '2',name: 'Fero'},
      { id: '3',name: 'Jozo'  },
      { id: '4',name: 'brano' },
      { id: '5',name: 'Vierka'},
  ]
}

