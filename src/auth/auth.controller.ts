import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './shared/auth.service';

@Controller()
export class AuthController 
{

    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('authfono/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('paciente'))
    @Post('authpaciente/login')
    async loginPaciente(@Request() req) {
        return this.authService.loginPaciente(req.user);
    }
}
