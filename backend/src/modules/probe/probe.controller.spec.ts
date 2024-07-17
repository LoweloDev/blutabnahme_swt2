import { Test, TestingModule } from "@nestjs/testing";
import { ProbeController } from "./probe.controller";
import { AppModule } from "../../app.module";

describe("ProbeController", () => {
  let controller: ProbeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<ProbeController>(ProbeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
