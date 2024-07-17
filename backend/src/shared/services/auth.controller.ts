import {
  Controller,
  Post,
  Headers,
  UnauthorizedException,
} from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";

@Controller("auth")
export class AuthController {
  constructor(private authservice: MitarbeiterService) {}
  @Post("login")
  async login(@Headers("authorization") auth: string) {
    const result = await this.authservice.verifyAsync(auth);

    if (!result) {
      throw new UnauthorizedException();
    }
    return result;
  }
}
