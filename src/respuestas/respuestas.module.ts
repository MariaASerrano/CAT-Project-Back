import { Module } from '@nestjs/common';
import { RespuestasService } from './respuestas.service';
import { RespuestasController } from './respuestas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Respuesta, RespuestaSchema } from './entities/respuesta.entity';

@Module({
  controllers: [RespuestasController],
  providers: [RespuestasService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Respuesta.name,
        schema: RespuestaSchema,
      },
    ]),
  ],
})
export class RespuestasModule {}
