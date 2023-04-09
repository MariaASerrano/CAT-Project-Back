import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectModel(Empresa.name)
    private readonly EmpresaModel: Model<Empresa>,
  ) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    try {
      const empresa = await this.EmpresaModel.create(createEmpresaDto);
      return empresa;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async login(credentials: LoginDto) {
    try {
      const empresa = await this.EmpresaModel.findOne({
        correo: credentials.correo,
      });

      if (empresa.contrasena != credentials.contrasena) {
        this.handleExceptions('El correo o la contraseña son incorrectos');
      }

      return empresa;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    const empresas = await this.EmpresaModel.find();
    return empresas;
  }

  async findOne(id: number) {
    const empresa = await this.EmpresaModel.findById(id);

    if (!empresa)
      throw new NotFoundException(`Empresa with id ${id} not found`);

    return empresa;
  }

  async update(id: string, updateEmpresaDto: any) {
    try {
      const empresa = await this.EmpresaModel.findById(id);
      console.log(id);

      await empresa.updateOne(updateEmpresaDto);
      return { ...empresa.toJSON(), ...updateEmpresaDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: number) {
    const { deletedCount } = await this.EmpresaModel.deleteOne({ _id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`Empresa with id "${id}" not found`);

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Empresa exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Empresa - Check server logs`,
    );
  }
}
