import { Global, Module } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";

@Global()
@Module({
  providers: [MitarbeiterService],
  exports: [MitarbeiterService], // Export the service so it can be used in other modules
})
export class ServicesModule {}
