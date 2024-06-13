import { Module } from '@nestjs/common';
import { LaborauftragService } from './laborauftrag.service';
import { LaborauftragController } from './laborauftrag.controller';

@Module({
  controllers: [LaborauftragController],
  providers: [LaborauftragService],
})
export class LaborauftragModule {}
