import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../app/components/dialog/dialog.component";
import {GenericError} from "../models/generic-error";
import {ComponentType} from "@angular/cdk/portal";
import {GenericSuccess} from "../models/generic-success";

@Injectable(
  {providedIn: 'root'}
)
export class PopupService {
  constructor(public dialog: MatDialog) {
  }

  showError(error: GenericError): void {
    this.dialog.open(DialogComponent<GenericError>, {
      data: error
    });
  }

  showSuccess(message: GenericSuccess): void {
    this.dialog.open(DialogComponent<GenericSuccess>, {
      data: message
    });
  }

  openStepDialog(component: ComponentType<unknown>, additionalData: { stepId: string, [key: string]: any}, callback: (result: any, stepId: string) => void): void {
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
