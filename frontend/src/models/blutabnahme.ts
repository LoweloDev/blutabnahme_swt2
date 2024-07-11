import {Probe} from "./probe";
import {Laborauftrag} from "./laborauftrag";

export class Blutabnahme {
  mitarbeiter_id?: string;
  patient_id?: string;
  laborauftrag?: Laborauftrag;
  timestamp?: Date;
  proben?: Probe[];
  laborauftrag_id?: string;
}
