import { Module } from '@nestjs/common';
import { AgendamentosController } from './agendamentos.controller';
import { AgendamentosService } from './shared/agendamentos.service/agendamentos.service';
import { AgendamentoSchema } from './schemas/agendamento.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
        MongooseModule.forFeature([
            { name: 'Agendamento', schema: AgendamentoSchema }
        ])
    ],
  controllers: [AgendamentosController],
  providers: [AgendamentosService]
})
export class AgendamentosModule {}
