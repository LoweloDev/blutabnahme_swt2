import {Probe} from "./probe";

export class Blutabnahme {
  mitarbeiter_id?: string;
  patient_id?: string;
  timestamp?: Date;
  proben?: Probe[];
  laborauftrag_id?: string;
}
