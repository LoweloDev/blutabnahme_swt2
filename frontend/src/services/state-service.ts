import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
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
