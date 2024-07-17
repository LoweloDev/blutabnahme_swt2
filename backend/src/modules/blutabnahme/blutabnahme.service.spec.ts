import { Test, TestingModule } from "@nestjs/testing";
import { BlutabnahmeService } from "./blutabnahme.service";
import { AppModule } from "../../app.module";

describe("BlutabnahmeService", () => {
  let service: BlutabnahmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<BlutabnahmeService>(BlutabnahmeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
