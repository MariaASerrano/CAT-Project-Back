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

  correo: string;
  contrasena: string;
  nombreUsuario: string;
  nroSedes: number;
  tiempoOpera: number;
  dependencia: string;
  nroEmpleados: number;
  ingreso: number;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
