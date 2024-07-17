import { Test, TestingModule } from "@nestjs/testing";
import { LaborauftragController } from "./laborauftrag.controller";
import { AppModule } from "../../app.module";

describe("LaborauftragController", () => {
  let controller: LaborauftragController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<LaborauftragController>(LaborauftragController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
