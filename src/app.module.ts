import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EmpresaModule } from './empresa/empresa.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { RespuestasModule } from './respuestas/respuestas.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cat'),

    AuthModule,

    EmpresaModule,

    PreguntasModule,

    RespuestasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
