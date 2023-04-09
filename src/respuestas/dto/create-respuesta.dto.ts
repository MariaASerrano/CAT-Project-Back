import { IsNotEmpty } from 'class-validator';

export class CreateRespuestaDto {
  @IsNotEmpty()
  valor: number;

  @IsNotEmpty()
  orden: number;

  @IsNotEmpty()
  idPregunta: string;
}
