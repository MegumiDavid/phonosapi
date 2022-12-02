import { Module } from '@nestjs/common';
import { PacientesService } from './shared/pacientes.service/pacientes.service';
import { PacientesController } from './pacientes.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { PacienteSchema } from './schemas/paciente.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Paciente', schema: PacienteSchema }
        ])
    ],
    controllers: [PacientesController],
    providers: [PacientesService]
})

export class PacientesModule {}