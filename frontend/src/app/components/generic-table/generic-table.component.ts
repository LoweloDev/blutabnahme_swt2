import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
    MatRow,
    MatPaginator
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  displayedColumns: string[] = [];
  tableDataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit(): void {
    if (this.dataSource.length > 0) {
      this.displayedColumns = Object.keys(this.dataSource[0]);
      this.tableDataSource.data = this.dataSource;
      this.tableDataSource.paginator = this.paginator;
      this.tableDataSource.sort = this.sort;
    }
  }
}
