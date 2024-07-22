import {Probe} from "./probe";
import {Laborauftrag} from "./laborauftrag";
import {GenericEntity} from "./generic-entity";

export class Blutabnahme extends GenericEntity {
  mitarbeiter_id?: string;
  patient_id?: string;
  laborauftrag?: Laborauftrag;
  timestamp?: Date;
  proben?: Probe[];
  laborauftrag_id?: string;
}
