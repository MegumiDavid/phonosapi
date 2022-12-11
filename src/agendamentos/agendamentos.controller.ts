import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { AgendamentosService } from './shared/agendamentos.service/agendamentos.service';
import { Agendamento } from './shared/agendamento/agendamento';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { JwtPacienteAuthGuard } from 'src/auth/shared/jwtpaciente-auth.guard';


@Controller('agendamentos')
export class AgendamentosController 
{
    constructor(
        private AgendamentosService: AgendamentosService
    ) {}
    
    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get()
    async getAll(): Promise<Agendamento[]> 
    {
        return this.AgendamentosService.getAll();
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get(':crfa')
    async getByFono(@Param('crfa') crfa: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByFono(crfa);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get('futuros/:crfa')
    async getByFonoFuturos(@Param('crfa') crfa: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByFonoFuturos(crfa);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get('passados/:crfa')
    async getByFonoPassados(@Param('crfa') crfa: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByFonoPassados(crfa);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get('filterpaciente/:token')
    async getByPaciente(@Param('token') token: string) : Promise<Agendamento[]> {
        return this.AgendamentosService.getByPaciente(token);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Post()
    async create(@Body() agendamento:Agendamento): Promise<Agendamento> 
    {
        return this.AgendamentosService.create(agendamento);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() agendamento:Agendamento): Promise<Agendamento[]> 
    {
        return this.AgendamentosService.update(id, agendamento);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.AgendamentosService.delete(id);
    }
}