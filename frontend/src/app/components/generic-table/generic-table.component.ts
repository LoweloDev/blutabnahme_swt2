import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {GenericEntity} from "../../../models/generic-entity";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [
    MatTable,
    MatSort,
    MatColumnDef,
    NgForOf,
    MatHeaderCell,
    MatHeaderCellDef,
    MatSortHeader,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatLabel,
    MatRow,
    MatPaginator,
    MatFormField,
    MatInput
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T extends GenericEntity> implements OnInit, OnChanges {
  @Input() dataSource: T[] = [];
  displayedColumns: string[] = [];
  tableDataSource = new MatTableDataSource<T>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.initializeTable();
    this.tableDataSource.filterPredicate = (data: any, filter: string) => {
      return this.displayedColumns.some(column =>
        data[column]?.toString().toLowerCase().includes(filter)
      );
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.initializeTable();
    }
  }

  async onRowClicked(row: T) {
    await this.router.navigate([`/detail/${row['id']}`]);
  }

  private initializeTable(): void {
    if (this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
      this.tableDataSource.data = this.dataSource;
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
