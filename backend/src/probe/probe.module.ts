import { Module } from "@nestjs/common";
import { ProbeService } from "./probe.service";
import { ProbeController } from "./probe.controller";
import { Probe } from "./entities/probe.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Probe], "default")],
  controllers: [ProbeController],
  providers: [ProbeService],
})
export class ProbeModule {}
