import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../app/components/error-dialog/error-dialog.component";
import {GenericError} from "../models/generic-error";

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
}
