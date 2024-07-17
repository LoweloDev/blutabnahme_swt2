import { Test, TestingModule } from "@nestjs/testing";
import { ProbeService } from "./probe.service";
import { AppModule } from "../../app.module";

describe("ProbeService", () => {
  let service: ProbeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<ProbeService>(ProbeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
