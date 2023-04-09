import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePreguntaDto {
  @IsNotEmpty()
  tipoPregunta: string[];

  @IsNotEmpty()
  tipoAtaque: string[];

  @IsNotEmpty()
  descripcion: string;

  @IsOptional()
  propuesta: string;

  @IsOptional()
  nist: string;
}
