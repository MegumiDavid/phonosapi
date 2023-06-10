import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { FonosModule } from './fonos/fonos.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { MulterModule } from '@nestjs/platform-express';
import { AtividadesModule } from './atividades/atividades.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://david_linguica:linguicaatomica.2003@phonoscluster.5dqyjfl.mongodb.net/?retryWrites=true&w=majority'),
    PacientesModule,
    MulterModule.register({
      dest: './uploads',
    }),
    FonosModule,
    AgendamentosModule,
    AtividadesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
