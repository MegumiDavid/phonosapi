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


    @Post()
    async create(@Body() agendamento:Agendamento): Promise<Agendamento> 
    {
        return this.AgendamentosService.create(agendamento);
    }


    
}