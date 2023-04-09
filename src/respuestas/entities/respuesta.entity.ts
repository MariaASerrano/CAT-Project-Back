import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Respuesta extends Document {
  @Prop({ required: true })
  valor: number;
  @Prop({ required: false })
  orden: number;
  @Prop({ required: true })
  idPregunta: string;
  @Prop({ required: true })
  idEmpresa: string;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
