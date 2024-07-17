import { Test, TestingModule } from "@nestjs/testing";
import { LaborauftragService } from "./laborauftrag.service";
import { AppModule } from "../../app.module";

describe("LaborauftragService", () => {
  let service: LaborauftragService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<LaborauftragService>(LaborauftragService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
