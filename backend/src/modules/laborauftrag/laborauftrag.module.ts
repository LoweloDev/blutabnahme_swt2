import { Module } from "@nestjs/common";
import { LaborauftragService } from "./laborauftrag.service";
import { LaborauftragController } from "./laborauftrag.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Laborauftrag } from "./entities/laborauftrag.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Laborauftrag], "default")],
  controllers: [LaborauftragController],
  providers: [LaborauftragService],
})
export class LaborauftragModule {}
