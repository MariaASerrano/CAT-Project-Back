import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Pregunta } from './entities/pregunta.entity';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel(Pregunta.name)
    private readonly PreguntaModel: Model<Pregunta>,
  ) {}

  async create(createPreguntaDto: CreatePreguntaDto) {
    const pregunta = await this.PreguntaModel.create(createPreguntaDto);
    return pregunta;
  }

  findAll() {
    return `This action returns all preguntas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pregunta`;
  }

  update(id: number, updatePreguntaDto: UpdatePreguntaDto) {
    return `This action updates a #${id} pregunta`;
  }

  remove(id: number) {
    return `This action removes a #${id} pregunta`;
  }
}
