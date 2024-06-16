import { Module } from "@nestjs/common";
import { BlutabnahmeService } from "./blutabnahme.service";
import { BlutabnahmeController } from "./blutabnahme.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Blutabnahme } from "./entities/blutabnahme.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Blutabnahme], "default")],
  controllers: [BlutabnahmeController],
  providers: [BlutabnahmeService],
})
export class BlutabnahmeModule {}
