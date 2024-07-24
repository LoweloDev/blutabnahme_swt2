import { Blutabnahme } from "../../blutabnahme/entities/blutabnahme.entity";

export class CreateLaborauftragDto {
  id: string;

  patient_id: string;

  mitarbeiter_id: string;

  laborId: string;

  type?: string;

  datum: Date;

  status: string;

  description: string;

  blutabnahmen: Blutabnahme[];

}
