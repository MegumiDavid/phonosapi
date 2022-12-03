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
    async getById(@Param('token') token: string) : Promise<Paciente[]> {
        return this.pacientesService.getById(token);
    }

    // retornar um lista
    /* @Get(':fname')
    async geByFname(@Param('fname') fname: string): Promise<Paciente> 
    {
        return this.pacientesService.getByFname(fname);
    } */

    @Post()
    async create(@Body() paciente:Paciente): Promise<Paciente> 
    {
        return this.pacientesService.create(paciente);
    }

    @Put(':token')
    async update(@Param('token') token: string, @Body() paciente: Paciente): Promise<Paciente[]> 
    {
        return this.pacientesService.update(token, paciente);
    }

    @Delete(':token')
    async delete(@Param('token') token: string) 
    {
        this.pacientesService.delete(token);
    } 
}
