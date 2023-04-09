import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Pregunta } from 'src/preguntas/entities/pregunta.entity';

@Schema()
export class Respuesta extends Document {
  @Prop({ required: true })
  valor: number;
  @Prop({ required: false })
  orden: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pregunta' })
  idPregunta: Pregunta;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' })
  idEmpresa: Empresa;
}

export const RespuestaSchema = SchemaFactory.createForClass(Respuesta);
