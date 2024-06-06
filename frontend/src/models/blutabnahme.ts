import {Probe} from "./Probe";

export class Blutabnahme {
  mitarbeiter_id?: string;
  patient_id?: string;
  timestamp?: string;
  proben?: Probe[];
}
