import { Injectable } from "@nestjs/common";

@Injectable()
export class MitarbeiterService {
  constructor() {}

  async verifyAsync(mitarbeiterId: string): Promise<any> {
    return this.fakeMitarbeiterVerificationEndpoint(mitarbeiterId);
  }

  // fake endpoint
  async fakeMitarbeiterVerificationEndpoint(
    mitarbeiterId: string,
  ): Promise<any> {
    const fakeMitarbeitersArray = [
      {
        id: "123",
        vorname: "Max",
        nachname: "Mustermann",
      },
      {
        id: "456",
        vorname: "Erika",
        nachname: "Mustermann",
      },
    ];

    return fakeMitarbeitersArray.find(
      (mitarbeiter) => mitarbeiter.id === mitarbeiterId,
    );
  }
}
