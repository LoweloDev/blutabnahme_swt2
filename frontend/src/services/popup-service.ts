import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../app/components/error-dialog/error-dialog.component";
import {GenericError} from "../models/generic-error";
import {ComponentType} from "@angular/cdk/portal";

@Injectable(
  {providedIn: 'root'}
)
export class PopupService {
  constructor(public dialog: MatDialog) {
  }

  showError(error: GenericError): void {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    });
  }

  openDialog(component: ComponentType<unknown>, additionalData: { stepId: string, [key: string]: any}, callback: (result: any, stepId: string) => void): void {
    const dialogRef = this.dialog.open(component, {
      data:{
        ...additionalData,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      callback(result, additionalData.stepId);
    });
  }
}
