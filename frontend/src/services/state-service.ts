import {Injectable, Signal} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {Laborauftrag} from "../models/laborauftrag";
import {Blutabnahme} from "../models/blutabnahme";
import {int} from "@zxing/library/es2015/customTypings";
import {MqttService} from "./mqtt.service";

@Injectable(
  {providedIn: 'root'}
)
export class StateService {
  constructor(public dialog: MatDialog) {
  }

  public blutabnahmeSubject = new Subject<Map<Laborauftrag, Blutabnahme>>();
  public genericComponentServiceMap = new Map<string, any>();
}
