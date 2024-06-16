import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LaborauftragModule } from "./laborauftrag/laborauftrag.module";
import { BlutabnahmeModule } from "./blutabnahme/blutabnahme.module";
import { ProbeModule } from "./probe/probe.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/database";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    LaborauftragModule,
    BlutabnahmeModule,
    ProbeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
