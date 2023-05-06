import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EmpresaModule } from './empresa/empresa.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { RespuestasModule } from './respuestas/respuestas.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://arrow:arrow@cat.t7dkvom.mongodb.net/cat',
    ),

    AuthModule,

    EmpresaModule,

    PreguntasModule,

    RespuestasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
