import {GenericEntity} from "./generic-entity";

export class Laborauftrag extends GenericEntity{
    override id: string;
    patient_id: string;
    mitarbeiter_id: string;
    laborId: string;
    datum: Date;
    status: string;
    description?: string;

    constructor(id: string, patientId: string, mitarbeiter_id: string, laborId: string, datum: Date, status: string, description?: string) {
      super();
      this.id = id;
        this.patient_id = patientId;
        this.mitarbeiter_id = mitarbeiter_id;
        this.laborId = laborId;
        this.datum = datum;
        this.status = status;
        this.description = description;
    }
}
