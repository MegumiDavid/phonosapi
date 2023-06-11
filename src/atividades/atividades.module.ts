import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AtividadesSchema } from './schemas/atividade.schema';
import { AtividadesController } from './atividades.controller';
import { AtividadeService } from './shared/atividade.service/atividade.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Atividade', schema: AtividadesSchema }
        ])
    ],
    controllers: [AtividadesController],
    providers: [AtividadeService],
    exports: [AtividadeService]
})

export class AtividadesModule { }
