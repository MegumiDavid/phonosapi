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
    @Post('/file')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix =
                        Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    const filename = `${uniqueSuffix}${ext}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    handleUpload(@UploadedFile() file: Express.Multer.File) {
        console.log('file', file);
        return 'Sucesso';
    }

    @Get('file/:filepath')
    seeUploadedFile(@Param('filepath') file,
        @Res() res) {
        return res.download(file, { root: './uploads' })
    }

}
