import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      const pregunta = await this.PreguntaModel.create(createPreguntaDto);
      return pregunta;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async createMany(createPreguntaDto: CreatePreguntaDto[]) {
    try {
      console.log(createPreguntaDto[1]);
      const pregunta = await this.PreguntaModel.insertMany(createPreguntaDto);
      return pregunta;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    const preguntas = await this.PreguntaModel.find();
    return preguntas;
  }

  async findOne(id: string) {
    const pregunta = await this.PreguntaModel.findById(id);

    if (!pregunta)
      throw new NotFoundException(`Pregunta with id ${id} not found`);

    return pregunta;
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto) {
    const pregunta = await this.PreguntaModel.findById(id);
    try {
      await pregunta.updateOne(updatePreguntaDto);
      return { ...pregunta.toJSON(), ...updatePreguntaDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.PreguntaModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`Pregunta with id "${id}" not found`);

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Pregunta exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Pregunta - Check server logs`,
    );
  }
}
