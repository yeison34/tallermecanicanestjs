import { Module } from '@nestjs/common';
import { EmpleadoService } from './services/empleado.service';
import { EmpleadoController } from './controllers/empleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { EspecialidadModule } from '../especialidad/especialidad.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Empleado]),
    EspecialidadModule
  ],
  controllers:[EmpleadoController],
  providers: [EmpleadoService],
  exports:[EmpleadoService]
})
export class EmpleadoModule {}
