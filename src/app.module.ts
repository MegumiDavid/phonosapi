import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesController } from './pacientes/pacientes.controller';

@Module({
  imports: [],
  controllers: [AppController, PacientesController],
  providers: [AppService],
})
export class AppModule {}
