import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { FonosService } from './shared/fonos.service/fonos.service';
import { Fono } from './shared/fono/fono'
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { JwtPacienteAuthGuard } from 'src/auth/shared/jwtpaciente-auth.guard';

@Controller('fonos')
export class FonosController 
{
    constructor(
        private FonosService: FonosService
    ) {}
    
    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get()
    async getAll(): Promise<Fono[]> 
    {
        return this.FonosService.getAll();
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get(':crfa')
    async getById(@Param('crfa') crfa: string) : Promise<Fono> {
        return this.FonosService.getById(crfa);
    }

    // retornar um lista
    /* @Get(':fname')
    async geByFname(@Param('fname') fname: string): Promise<Fono> 
    {
        return this.FonosService.getByFname(fname);
    } */

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Post()
    async create(@Body() fono:Fono): Promise<Fono> 
    {
        return this.FonosService.create(fono);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put(':crfa')
    async update(@Param('crfa') crfa: string, @Body() fono: Fono): Promise<Fono> 
    {
        return this.FonosService.update(crfa, fono);
    }

    @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Delete(':crfa')
    async delete(@Param('crfa') crfa: string) 
    {
        this.FonosService.delete(crfa);
    } 
}
