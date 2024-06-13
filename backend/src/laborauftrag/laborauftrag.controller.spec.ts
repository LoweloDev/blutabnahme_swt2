import { Test, TestingModule } from '@nestjs/testing';
import { LaborauftragController } from './laborauftrag.controller';
import { LaborauftragService } from './laborauftrag.service';

describe('LaborauftragController', () => {
  let controller: LaborauftragController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaborauftragController],
      providers: [LaborauftragService],
    }).compile();

    controller = module.get<LaborauftragController>(LaborauftragController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
