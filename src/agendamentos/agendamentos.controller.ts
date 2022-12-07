import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AgendamentosService } from './shared/agendamentos.service/agendamentos.service';
import { Agendamento } from './shared/agendamento/agendamento';

@Controller('agendamentos')
export class AgendamentosController 
{
    constructor(
        private AgendamentosService: AgendamentosService
    ) {}

    @Get()
    async getAll(): Promise<Agendamento[]> 
    {
        return this.AgendamentosService.getAll();
    }

    @Get(':crfa')
    async getByFono(@Param('crfa') crfa: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByFono(crfa);
    }

    @Get('filterpaciente/:token')
    async getByPaciente(@Param('token') token: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByPaciente(token);
    }

    @Post()
    async create(@Body() agendamento:Agendamento): Promise<Agendamento> 
    {
        return this.AgendamentosService.create(agendamento);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.AgendamentosService.delete(id);
    }
}