import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://david_linguica:linguicaatomica.2003@cluster0.6mbssww.mongodb.net/?retryWrites=true&w=majority'),
    PacientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
