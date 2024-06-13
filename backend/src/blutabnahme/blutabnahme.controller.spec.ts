import { Test, TestingModule } from '@nestjs/testing';
import { BlutabnahmeController } from './blutabnahme.controller';
import { BlutabnahmeService } from './blutabnahme.service';

describe('BlutabnahmeController', () => {
  let controller: BlutabnahmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlutabnahmeController],
      providers: [BlutabnahmeService],
    }).compile();

    controller = module.get<BlutabnahmeController>(BlutabnahmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
