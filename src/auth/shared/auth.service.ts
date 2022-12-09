import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FonosService } from 'src/fonos/shared/fonos.service/fonos.service';
import { PacientesService } from 'src/pacientes/shared/pacientes.service/pacientes.service';


@Injectable()
export class AuthService 
{
    constructor(
        private fonosService: FonosService,
        private pacientesService: PacientesService,
        private jwtService: JwtService,
    ) { }

    async validateFono(fonoEmail: string, fonoPassword: string)
    {
        const fono = await this.fonosService.getByEmail(fonoEmail);
        if(fono && fono.password == fonoPassword)
        {
            const {_id, crfa, fname, lname, img, email, pacientes} = fono;
            return {_id, crfa, fname, lname, img, email, pacientes};
        }
        return null;
    }

    async validatePaciente(pacienteToken: string, pacientePassword: string)
    {
        const paciente = await this.pacientesService.getById(pacienteToken);
        if(paciente && paciente.password == pacientePassword)
        {
            const {_id, token, fname, lname, bday, condicao, img, fonos} = paciente;
            return {_id, token, fname, lname, bday, condicao, img, fonos};
        }
        return null;
    }

    async login(fono:any)
    {
        const payload = { email: fono.email, sub: fono._id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async loginPaciente(paciente:any)
    {
        const payload = { token: paciente.token, sub: paciente._id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
