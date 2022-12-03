import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { FonosService } from './shared/fonos.service/fonos.service';
import { Fono } from './shared/fono/fono'


@Controller('fonos')
export class FonosController 
{
    constructor(
        private FonosService: FonosService
    ) {}

    @Get()
    async getAll(): Promise<Fono[]> 
    {
        return this.FonosService.getAll();
    }

    @Get(':crfa')
    async getById(@Param('crfa') crfa: string) : Promise<Fono[]> {
        return this.FonosService.getById(crfa);
    }

    // retornar um lista
    /* @Get(':fname')
    async geByFname(@Param('fname') fname: string): Promise<Fono> 
    {
        return this.FonosService.getByFname(fname);
    } */

    @Post()
    async create(@Body() fono:Fono): Promise<Fono> 
    {
        return this.FonosService.create(fono);
    }

    @Put(':crfa')
    async update(@Param('crfa') crfa: string, @Body() fono: Fono): Promise<Fono[]> 
    {
        return this.FonosService.update(crfa, fono);
    }

    @Delete(':crfa')
    async delete(@Param('crfa') crfa: string) 
    {
        this.FonosService.delete(crfa);
    } 
}
