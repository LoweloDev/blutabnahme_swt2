import { Global, Module } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";
import { AuthController } from "./auth.controller";

@Global()
@Module({
  providers: [MitarbeiterService],
  exports: [MitarbeiterService],
  controllers: [AuthController],
})
export class ServicesModule {}
