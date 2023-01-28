import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pregunta extends Document {
  tipoPregunta: string;
  tipoAtaque: string;
  peso: number;
  descripcion: string;
  orden: number;
  propuesta: string;
  nist: string;
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
