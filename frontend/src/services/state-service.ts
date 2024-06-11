import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../app/components/error-dialog/error-dialog.component";
import {GenericError} from "../models/generic-error";
import {ComponentType} from "@angular/cdk/portal";
import {Subject} from "rxjs";
import {Laborauftrag} from "../models/laborauftrag";
import {Blutabnahme} from "../models/blutabnahme";

@Injectable(
  {providedIn: 'root'}
)
export class StateService {
  constructor(public dialog: MatDialog) {
  }

  public blutabnahmeSubject = new Subject<Map<Laborauftrag, Blutabnahme>>();
}
