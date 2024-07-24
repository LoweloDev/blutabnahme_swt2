import { Laborauftrag } from "../../laborauftrag/entities/laborauftrag.entity";
import { Probe } from "../../probe/entities/probe.entity";

export class CreateBlutabnahmeDto {
  id: string;

  mitarbeiter_id?: string;

  patient_id?: string;

  type?: string;

  timestamp?: Date;

  proben: Probe[];

  laborauftrag: Laborauftrag;

  laborauftrag_id?: string;

}
