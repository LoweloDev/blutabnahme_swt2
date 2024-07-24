import { Blutabnahme } from "../../blutabnahme/entities/blutabnahme.entity";

export class CreateProbeDto {
  id: string;

  laborauftrag_id?: string;

  material: string;

  timestamp?: Date;

  type?: string;

  blutabnahme: Blutabnahme;

}
