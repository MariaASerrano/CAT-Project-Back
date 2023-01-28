import { IsOptional } from 'class-validator';

export class CreateEmpresaDto {
  nombreEmpresa: string;
  correo: string;
  contrasena: string;

  @IsOptional()
  nombreUsuario: string;
  @IsOptional()
  nroSedes: number;
  @IsOptional()
  tiempoOpera: number;
  @IsOptional()
  dependencia: string;
  @IsOptional()
  nroEmpleados: number;
  @IsOptional()
  ingreso: number;
}
