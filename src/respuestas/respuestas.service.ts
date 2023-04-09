import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRespuestaDto } from './dto/create-respuesta.dto';
import { UpdateRespuestaDto } from './dto/update-respuesta.dto';
import { Respuesta } from './entities/respuesta.entity';

@Injectable()
export class RespuestasService {
  constructor(
    @InjectModel(Respuesta.name)
    private readonly RespuestaModel: Model<Respuesta>,
  ) {}

  async create(createRespuestaDto: CreateRespuestaDto) {
    try {
      const pregunta = await this.RespuestaModel.create(createRespuestaDto);
      return pregunta;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    const preguntas = await this.RespuestaModel.find();
    return preguntas;
  }

  async findOne(id: number) {
    const pregunta = await this.RespuestaModel.findById(id);

    if (!pregunta)
      throw new NotFoundException(`Pregunta with id ${id} not found`);

    return pregunta;
  }

  async update(id: number, updateRespuestaDto: UpdateRespuestaDto) {
    const pregunta = await this.RespuestaModel.findById(id);
    try {
      await pregunta.updateOne(updateRespuestaDto);
      return { ...pregunta.toJSON(), ...updateRespuestaDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: number) {
    const { deletedCount } = await this.RespuestaModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`Pregunta with id "${id}" not found`);

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Respuesta exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Respuesta - Check server logs`,
    );
  }
}
