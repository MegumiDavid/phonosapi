import { Module } from '@nestjs/common';
import { FonosController } from './fonos.controller';
import { FonosService } from './shared/fonos.service/fonos.service';
import { FonoSchema } from './schemas/fono.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
        MongooseModule.forFeature([
            { name: 'Fono', schema: FonoSchema }
        ])
    ],
  controllers: [FonosController],
  providers: [FonosService],
  exports: [FonosService]
})
export class FonosModule {}
