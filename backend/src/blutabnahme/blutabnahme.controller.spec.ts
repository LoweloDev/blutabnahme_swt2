import { Test, TestingModule } from "@nestjs/testing";
import { BlutabnahmeController } from "./blutabnahme.controller";
import { BlutabnahmeService } from "./blutabnahme.service";
import { AppModule } from "../app.module";

describe("BlutabnahmeController", () => {
  let controller: BlutabnahmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<BlutabnahmeController>(BlutabnahmeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
