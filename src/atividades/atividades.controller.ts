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
                    const filename = `${file.originalname}${extname(file.originalname)}`;
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

}