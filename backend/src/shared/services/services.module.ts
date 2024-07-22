import { Global, Module } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";
import { AuthController } from "./auth.controller";
// import { MqttService } from "./mqtt/mqtt.service";

@Global()
@Module({
  providers: [MitarbeiterService],
  exports: [MitarbeiterService],
  controllers: [AuthController],
})
export class ServicesModule {}
