import {GenericEntity} from "./generic-entity";

export class Probe extends GenericEntity {
  override id: string;
  laborauftrag_id?: string;
  material?: string;
  timestamp?: Date;
  blutabnahme_id?: string;
}
