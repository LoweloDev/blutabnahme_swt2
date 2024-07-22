import {Component, Inject, Input} from '@angular/core';
import {LaborauftragTableComponent} from "../laborauftrag-table/laborauftrag-table.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Laborauftrag} from "../../../models/laborauftrag";
import {GenericDialogType} from "../../../consts/enums";
import {NgIf} from "@angular/common";
import {LaborauftragSelectedComponent} from "../laborauftrag-selected/laborauftrag-selected.component";

@Component({
  selector: 'app-laborauftrag-dialog',
  standalone: true,
  imports: [
    LaborauftragTableComponent,
    NgIf,
    LaborauftragSelectedComponent
  ],
  templateUrl: './laborauftrag-dialog.component.html',
  styleUrl: './laborauftrag-dialog.component.css'
})
export class LaborauftragDialogComponent {
  style: GenericDialogType;
  filters: any;
  laborauftrags: Laborauftrag[] = [];

  constructor(
    public dialogRef: MatDialogRef<LaborauftragDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.filters = data.filters;
    this.style = data.style;
  }

  setLaborauftrag(laborauftrags: Laborauftrag[]): void {
    this.laborauftrags = laborauftrags;

    if(this.laborauftrags) {
      this.save();
    } else {
      this.cancel();
    }
  }

  save(): void {
    this.dialogRef.close(this.laborauftrags);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  protected readonly GenericDialogType = GenericDialogType;
}
