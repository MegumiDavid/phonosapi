import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { FonosModule } from './fonos/fonos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://david_linguica:linguicaatomica.2003@cluster0.r1gyy1y.mongodb.net/?retryWrites=true&w=majority'),
    PacientesModule,
    FonosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
