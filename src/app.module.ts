import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesController } from './pacientes/pacientes.controller';
import { PacientesService } from './pacientes/shared/pacientes.service/pacientes.service';

@Module({
  imports: [],
  controllers: [AppController, PacientesController],
  providers: [AppService, PacientesService],
})
export class AppModule {}
