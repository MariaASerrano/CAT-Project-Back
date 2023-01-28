import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pregunta, PreguntaSchema } from './entities/pregunta.entity';

@Module({
  controllers: [PreguntasController],
  providers: [PreguntasService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pregunta.name,
        schema: PreguntaSchema,
      },
    ]),
  ],
})
export class PreguntasModule {}
