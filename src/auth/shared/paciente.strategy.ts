import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";


@Injectable()
export class PacienteStrategy extends PassportStrategy(Strategy, 'paciente')
{
    constructor(private authService: AuthService)
    {
        super({
            usernameField: 'token',
            passwordField: 'password',
        })
    }

    async validate(token: string, password: string): Promise<any>
    {
        const paciente = await this.authService.validatePaciente(token, password);
        if(!paciente){ throw new UnauthorizedException();}
        return paciente; 
    }
}