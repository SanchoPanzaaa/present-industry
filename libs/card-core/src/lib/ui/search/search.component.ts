import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { compare } from '../shared/utils/logic-helpers';
import { searchConfigDefault } from './search-config';
import { SortDirection, TableConfig,  } from './search.model';

/*
  This component was meant to build searchFormField with ease,
  it is generic component for generic data to a table
  TODO: [
    check the animations, remove or take it higher,
    we need service to maintain CRUD operations,
    column with buttons (think if it's necessary to control btn actions from outside),
    try it with more different implementations,
    thinking of better approach (divide component into logic siblings table / searchField)
  ]
*/

@Component({
  selector: 'present-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class SearchComponent<T> implements OnChanges, AfterViewInit{
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @Input()
  protected tableConfig: TableConfig<T>;

  protected dataSource: MatTableDataSource<T>;
  protected sortedData: T[] = [];
  protected clickedRow = new Set<T>();
  protected selectedRow: T | null = null;

  /* Controls */
  protected hiddenTable: boolean = false as boolean;
  protected searchTerm = '';

  /* Lifecycle hooks */
  constructor() {
    this.tableConfig = searchConfigDefault as TableConfig<T>;
    this.dataSource = new MatTableDataSource<T>(this.tableConfig.dataSource);
    this.sortedData = this.dataSource.data.slice();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['searchConfig'].currentValue) {
        // after changes was made, use renderRows()
      }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  /* scope FUNCTIONS */
  protected execute(row: T) {
    this.selectedRow = row;
  }

  /* If you click outside of component, table will
     close automatically with the help of
     ${focusOutDirective}
  */
  protected openCloseTable(click: boolean) {
    this.hiddenTable = !click;
  }

  /* TODO: it can be handled in much better way */
  protected sortData(sort: Sort): void {
      const data = this.tableConfig.dataSource.slice();

      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }
      // sort by string or number
      const isAsc = sort.direction === SortDirection.ASC;
      this.sortedData = data.sort((a: T, b: T) => {
        return compare(a as T, b as T, isAsc)
      });
  }

  protected onSearchTermChanged(searchTerm: string) {
    this.dataSource.filter = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
