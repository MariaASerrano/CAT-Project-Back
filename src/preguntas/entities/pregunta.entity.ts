import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pregunta extends Document {
  @Prop({ required: true })
  tipoPregunta: string[];
  @Prop({ required: true })
  tipoAtaque: string[];
  @Prop({ required: true })
  descripcion: string;
  @Prop({ required: false })
  propuesta: string;
  @Prop({ required: false })
  nist: string;
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
