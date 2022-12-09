import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { PacientesService } from './shared/pacientes.service/pacientes.service';
import { Paciente } from './shared/paciente/paciente'
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { JwtPacienteAuthGuard } from 'src/auth/shared/jwtpaciente-auth.guard';

@Controller('pacientes')
export class PacientesController 
{
    constructor(
        private pacientesService: PacientesService
    ) {}

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get()
    async getAll(): Promise<Paciente[]> 
    {
        return this.pacientesService.getAll();
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get(':token')
    async getById(@Param('token') token: string) : Promise<Paciente> {
        return this.pacientesService.getById(token);
    }

    // retornar um lista
    /* @Get(':fname')
    async geByFname(@Param('fname') fname: string): Promise<Paciente> 
    {
        return this.pacientesService.getByFname(fname);
    } */

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Post()
    async create(@Body() paciente:Paciente): Promise<Paciente> 
    {
        return this.pacientesService.create(paciente);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put(':token')
    async update(@Param('token') token: string, @Body() paciente: Paciente): Promise<Paciente> 
    {
        return this.pacientesService.update(token, paciente);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Delete(':token')
    async delete(@Param('token') token: string) 
    {
        this.pacientesService.delete(token);
    } 
}
