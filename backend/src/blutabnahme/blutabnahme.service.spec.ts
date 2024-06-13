import { Test, TestingModule } from '@nestjs/testing';
import { BlutabnahmeService } from './blutabnahme.service';

describe('BlutabnahmeService', () => {
  let service: BlutabnahmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlutabnahmeService],
    }).compile();

    service = module.get<BlutabnahmeService>(BlutabnahmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});