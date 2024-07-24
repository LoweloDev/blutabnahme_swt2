import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Laborauftrag} from "../../../models/laborauftrag";
import {MatToolbar} from "@angular/material/toolbar";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatCheckbox} from "@angular/material/checkbox";
import {DatePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {LaborauftragService} from "../../../services/laborauftrag-service";

@Component({
  selector: 'app-laborauftrag-table',
  standalone: true,
  imports: [
    MatToolbar,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatCheckbox,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    DatePipe,
    MatButton
  ],
  templateUrl: './laborauftrag-table.component.html',
  styleUrl: './laborauftrag-table.component.css'
})
export class LaborauftragTableComponent implements OnInit {
  @Input() filters: any;
  @Output() laborauftragSelected = new EventEmitter<any>();
  displayedColumns: string[] = ['select', 'id', 'patientId', 'arztId', 'laborId', 'datum', 'status'];
  dataSource: Laborauftrag[] = [];
  selection = new Set<Laborauftrag>();

  constructor(private service: LaborauftragService) {
  }

  submitSelection(): void {
    this.laborauftragSelected.emit(Array.from(this.selection));
  }

  isSelected(row: Laborauftrag): boolean {
    return this.selection.has(row);
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.dataSource = data.filter((laborauftrag) => {
        return Object.keys(this.filters).every((key) => {
          return laborauftrag[key as keyof Laborauftrag] === this.filters[key];
        });
      });
    });
  }

  toggleSelection(row: Laborauftrag): void {
    if (this.isSelected(row)) {
      this.selection.delete(row);
    } else {
      this.selection.add(row);
    }
  }

  handleRowClick(event: MouseEvent, row: Laborauftrag): void {
    if (event.shiftKey) {
      const lastSelected = Array.from(this.selection).pop();
      if (lastSelected) {
        const startIndex = this.dataSource.indexOf(lastSelected);
        const endIndex = this.dataSource.indexOf(row);
        const range = [startIndex, endIndex].sort((a, b) => a - b);
        for (let i = range[0]; i <= range[1]; i++) {
          this.selection.add(this.dataSource[i]);
        }
      } else {
        this.toggleSelection(row);
      }
    } else {
      this.toggleSelection(row);
    }
  }
}
