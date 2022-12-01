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
    async geById(@Param('id') id: number): Promise<Paciente> 
    {
        return this.pacientesService.getById(id);
    }

    @Post()
    async create(@Body() paciente:Paciente): Promise<Paciente> 
    {
        return this.pacientesService.create(paciente);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() paciente: Paciente): Promise<Paciente> 
    {
        paciente.id = id;
        return this.pacientesService.update(paciente);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) 
    {
        this.pacientesService.delete(id);
    }
}
