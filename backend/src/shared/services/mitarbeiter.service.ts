import { Injectable } from "@nestjs/common";

@Injectable()
export class MitarbeiterService {
  constructor() {}

  async verifyAsync(mitarbeiterId: string): Promise<boolean> {
    return this.fakeMitarbeiterVerificationEndpoint(mitarbeiterId);
  }

  // fake endpoint
  async fakeMitarbeiterVerificationEndpoint(
    mitarbeiterId: string,
  ): Promise<boolean> {
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

    const found = fakeMitarbeitersArray.find(
      (mitarbeiter) => mitarbeiter.id === mitarbeiterId,
    );

    return !!found;
  }
}
