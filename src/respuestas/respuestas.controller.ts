import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { RespuestasService } from './respuestas.service';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { Request } from 'express';

@Controller('respuestas')
export class RespuestasController {
  constructor(private readonly respuestasService: RespuestasService) {}

  @Post()
  create(@Req() request: Request) {
    const createRespuestaDto = request.body;
    const idEmpresa = (request.headers['authorization'] as string).replace(
      'Bearer ',
      '',
    );
    return this.respuestasService.create({
      idEmpresa: idEmpresa,
      ...createRespuestaDto,
    });
  }

  @Get()
  findAll() {
    return this.respuestasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respuestasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRespuestaDto: UpdateRespuestaDto,
  ) {
    return this.respuestasService.update(+id, updateRespuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respuestasService.remove(+id);
  }
}
