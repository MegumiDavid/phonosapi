import { PacientesService } from './shared/pacientes.service/pacientes.service';
import { PacientesController } from './pacientes.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [PacientesController],
    providers: [PacientesService]
})

export class PacientesModule {}