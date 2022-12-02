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

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Paciente> 
    {
        return this.pacientesService.getById(id);
    }

    @Get(':token')
    async getByToken(@Param('token') token: string): Promise<Paciente> 
    {
        return this.pacientesService.getByToken(token);
    }

    // retornar um lista
    @Get(':fname')
    async geByFname(@Param('fname') fname: string): Promise<Paciente> 
    {
        return this.pacientesService.getByFname(fname);
    }

    @Post()
    async create(@Body() paciente:Paciente): Promise<Paciente> 
    {
        return this.pacientesService.create(paciente);
    }

    @Put(':token')
    async update(@Param('token') token: string, @Body() paciente: Paciente): Promise<Paciente> 
    {
        paciente.token = token;
        return this.pacientesService.update(paciente);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) 
    {
        this.pacientesService.delete(id);
    }
}
