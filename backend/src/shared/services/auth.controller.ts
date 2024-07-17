import { Controller, Post, Headers } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";

@Controller("auth")
export class AuthController {
  constructor(private authservice: MitarbeiterService) {
  }
  @Post("login")
  login(@Headers("authorization") auth: string) {
    return this.authservice.verifyAsync(auth);
  }
}
