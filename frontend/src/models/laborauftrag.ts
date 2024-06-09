export class Laborauftrag {
    id: string;
    patientId: string;
    arztId: string;
    laborId: string;
    datum: Date;
    status: string;
    description: string;
    constructor(id: string, patientId: string, arztId: string, laborId: string, datum: Date, status: string) {
        this.id = id;
        this.patientId = patientId;
        this.arztId = arztId;
        this.laborId = laborId;
        this.datum = datum;
        this.status = status;
    }
}
