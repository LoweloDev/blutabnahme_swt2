import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./data/database";
import { LaborauftragModule } from "./modules/laborauftrag/laborauftrag.module";
import { BlutabnahmeModule } from "./modules/blutabnahme/blutabnahme.module";
import { ProbeModule } from "./modules/probe/probe.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LaborauftragModule,
    BlutabnahmeModule,
    ProbeModule,
  ],
})
export class AppModule {}
