import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private mitarbeiterVerificationService: MitarbeiterService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    console.log("HERE", context)
    const request = context.switchToHttp().getRequest();
    console.log("HERE", request.headers.authorization);
    const mitarbeiterId = request.headers.authorization;
    console.log("HERE", mitarbeiterId)
    if (!mitarbeiterId) {
      throw new UnauthorizedException();
    }
    try {
      console.log("TRY")
      request["authorized"] =
        await this.mitarbeiterVerificationService.verifyAsync(mitarbeiterId);
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
