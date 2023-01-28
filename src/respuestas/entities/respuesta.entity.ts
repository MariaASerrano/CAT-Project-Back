import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Respuesta extends Document {
  descripcionRes: string;
  valor: number;
  orden: number;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
