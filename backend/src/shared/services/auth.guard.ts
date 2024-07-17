import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { MitarbeiterService } from "./mitarbeiter.service";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private mitarbeiterVerificationService: MitarbeiterService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const mitarbeiterId = this.extractTokenFromHeader(request);
    if (!mitarbeiterId) {
      throw new UnauthorizedException();
    }
    try {
      request["authorized"] =
        await this.mitarbeiterVerificationService.verifyAsync(mitarbeiterId);
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
