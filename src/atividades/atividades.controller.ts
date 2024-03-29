import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { AtividadeService } from './shared/atividade.service/atividade.service';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { JwtPacienteAuthGuard } from 'src/auth/shared/jwtpaciente-auth.guard';
import { Atividade } from './shared/atividade/atividade';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


@Controller('atividades')
export class AtividadesController {

    constructor(
        private AtividadeService: AtividadeService
    ) { }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)    
    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = `${file.originalname}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    handleUpload(@UploadedFile() file: Express.Multer.File, @Body() atividade: Atividade) {
        console.log('file', file);
        atividade.arquivoPath = file.originalname;
        return this.AtividadeService.create(atividade);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)   
    @Get('file/:filepath')
    seeUploadedFile(@Param('filepath') file,
        @Res() res) {
        return res.download(file, { root: './uploads' })
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)   
    @Get(':crfa')
    async getByFono(@Param('crfa') crfa: string): Promise<Atividade[]> {
        return this.AtividadeService.getByFono(crfa);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get('filterpaciente/:token')
    async getByPaciente(@Param('token') token: string): Promise<Atividade[]> {
        return this.AtividadeService.getByPaciente(token);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put('paciente/:id')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = `${file.originalname}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    async updatePaciente(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Body() atividade: Atividade): Promise<Atividade[]> {
        console.log('file', file);
        atividade.entregaPath = file.originalname;
        return this.AtividadeService.update(id, atividade);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Get('id/:id')
    async getById(@Param('id') id: string): Promise<Atividade[]> {
        return this.AtividadeService.getById(id);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put('file/:id')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = `${file.originalname}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    async updateFile(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Body() atividade: Atividade): Promise<Atividade[]> {
        console.log('file', file);
        atividade.arquivoPath = file.originalname;
        return this.AtividadeService.update(id, atividade);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() atividade: Atividade): Promise<Atividade[]> {
        return this.AtividadeService.update(id, atividade);
    }

    // @UseGuards(JwtAuthGuard, JwtPacienteAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.AtividadeService.delete(id);
    }

}