import { Module } from '@nestjs/common';
import { EspecialidadController } from './controllers/especialidad.controller';
import { EspecialidadService } from './services/especialidad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './entityes/especialidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService],
})
export class EspecialidadModule {}
