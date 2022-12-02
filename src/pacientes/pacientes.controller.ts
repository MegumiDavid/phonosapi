import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PacientesService } from './shared/pacientes.service/pacientes.service';
import { Paciente } from './shared/paciente/paciente'

@Controller('pacientes')
export class PacientesController 
{
    constructor(
        private pacientesService: PacientesService
    ) {}

    @Get()
    async getAll(): Promise<Paciente[]> 
    {
        return this.pacientesService.getAll();
    }

    @Get(':token')
    async getByToken(@Param('token') token: string): Promise<Paciente> {
        return this.pacientesService.getByToken(token);
    }

    @Post()
    async create(@Body() paciente:Paciente): Promise<Paciente> 
    {
        return this.pacientesService.create(paciente);
    }


    @Put(':token')
    async update(@Param('token') token: string, @Body() paciente: Paciente): Promise<Paciente> {
        return this.pacientesService.updateOne({ token: token }, paciente);
    }

    @Delete(':token')
    async deleteOne(@Param('token') token: string) 
    {
        this.pacientesService.deleteOne({ token: token });
    }
}
