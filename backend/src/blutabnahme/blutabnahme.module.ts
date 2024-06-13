import { Module } from '@nestjs/common';
import { BlutabnahmeService } from './blutabnahme.service';
import { BlutabnahmeController } from './blutabnahme.controller';

@Module({
  controllers: [BlutabnahmeController],
  providers: [BlutabnahmeService],
})
export class BlutabnahmeModule {}
