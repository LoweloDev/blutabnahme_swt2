import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-blutabnahme',
  standalone: true,
  imports: [],
  templateUrl: './blutabnahme.component.html',
  styleUrl: './blutabnahme.component.css'
})
export class BlutabnahmeComponent {
  steps = [1, 2, 3, 4];
  currentStep = 0;
  data: any = {};

  constructor(public dialog: MatDialog) {}

  openDialog(step: number): void {
    const dialogRef = this.dialog.open(StepDialogComponent, {
      data: { step: step, previousData: this.data }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data = result;
        this.currentStep++;
      }
    });
  }
}
