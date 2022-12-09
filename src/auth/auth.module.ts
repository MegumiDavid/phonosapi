import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { FonosModule } from 'src/fonos/fonos.module';
import { PacientesModule } from 'src/pacientes/pacientes.module';
import { LocalStrategy } from './shared/local.strategy';
import { PacienteStrategy } from './shared/paciente.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport'
import { jwtConstants } from './shared/constants';
import { JwtPacienteStrategy } from './shared/jwtpaciente.strategy';

@Module({
    imports: [FonosModule, PacientesModule, PassportModule, 
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '28800s'}
        })],
    controllers: [AuthController, ],
    providers: [AuthService, LocalStrategy, PacienteStrategy, JwtStrategy, JwtPacienteStrategy],
})
export class AuthModule {}
