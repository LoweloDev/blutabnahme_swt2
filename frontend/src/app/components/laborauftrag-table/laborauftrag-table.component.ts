import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
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
export class LaborauftragTableComponent {
  @Input() filters: any;
  @Output() laborauftragSelected = new EventEmitter<any>();
  displayedColumns: string[] = ['select', 'id', 'patientId', 'arztId', 'laborId', 'datum', 'status'];
  dataSource: Laborauftrag[] = [
    new Laborauftrag('1350310910', 'p1', 'a1', '1235001501051', new Date('2023-01-01'), 'Pending'),
    new Laborauftrag('2135015011', 'p2', 'a2', '1501205010501', new Date('2023-02-01'), 'Completed'),
    // Add more instances as needed
  ];
  selection = new Set<Laborauftrag>();

  submitSelection(): void {
    this.laborauftragSelected.emit(Array.from(this.selection));
  }
  isSelected(row: Laborauftrag): boolean {
    return this.selection.has(row);
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

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    const rowElement = (event.target as HTMLElement).closest('tr.mat-row');
    if (rowElement) {
      this.dragStartIndex = Array.from(rowElement.parentElement!.children).indexOf(rowElement);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
      const rowElement = (event.target as HTMLElement).closest('tr.mat-row');
      if (rowElement) {
        this.dragEndIndex = Array.from(rowElement.parentElement!.children).indexOf(rowElement);
        this.selectRowsInRange();
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      // Optional: Implement visual feedback for drag selection
    }
  }

  selectRowsInRange(): void {
    if (this.dragStartIndex !== null && this.dragEndIndex !== null) {
      const range = [this.dragStartIndex, this.dragEndIndex].sort((a, b) => a - b);
      for (let i = range[0]; i <= range[1]; i++) {
        this.selection.add(this.dataSource[i]);
      }
    }
    this.dragStartIndex = this.dragEndIndex = null;
  }

  isDragging = false;
  dragStartIndex: number | null = null;
  dragEndIndex: number | null = null;
}
