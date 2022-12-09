import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy)
{
    constructor(private authService: AuthService)
    {
        super({
            usernameField: 'email',
            passwordField: 'password',
        })
    }

    async validate(email: string, password: string): Promise<any>
    {
        const fono = await this.authService.validateFono(email, password);
        if(!fono){ throw new UnauthorizedException();}
        return fono; 
    }
}