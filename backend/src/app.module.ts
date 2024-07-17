import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./data/database";
import { LaborauftragModule } from "./modules/laborauftrag/laborauftrag.module";
import { BlutabnahmeModule } from "./modules/blutabnahme/blutabnahme.module";
import { ProbeModule } from "./modules/probe/probe.module";
import { ServicesModule } from "./shared/services/services.module";

@Module({
  imports: [
    ServicesModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LaborauftragModule,
    BlutabnahmeModule,
    ProbeModule,
  ],
})
export class AppModule {}
