import { Test, TestingModule } from '@nestjs/testing';
import { LaborauftragService } from './laborauftrag.service';

describe('LaborauftragService', () => {
  let service: LaborauftragService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaborauftragService],
    }).compile();

    service = module.get<LaborauftragService>(LaborauftragService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
