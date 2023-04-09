import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Empresa extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  nombreEmpresa: string;
  @Prop({ required: true })
  correo: string;
  @Prop({ required: true })
  contrasena: string;
  @Prop({ required: false })
  nombreUsuario: string;
  @Prop({ required: false })
  nroSedes: number;
  @Prop({ required: false })
  tiempoOpera: number;
  @Prop({ required: false })
  dependencia: string;
  @Prop({ required: false })
  nroEmpleados: number;
  @Prop({ required: false })
  ingreso: number;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
