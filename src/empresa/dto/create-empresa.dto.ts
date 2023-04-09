import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  nombreEmpresa: string;

  @IsNotEmpty()
  correo: string;

  @IsNotEmpty()
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
