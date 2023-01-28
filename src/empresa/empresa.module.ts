import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Empresa, EmpresaSchema } from './entities/empresa.entity';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Empresa.name,
        schema: EmpresaSchema,
      },
    ]),
  ],
})
export class EmpresaModule {}
