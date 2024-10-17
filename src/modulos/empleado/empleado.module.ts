import { Module } from '@nestjs/common';
import { EmpleadoService } from './services/empleado.service';
import { EmpleadoController } from './controllers/empleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Empleado])
  ],
  controllers:[EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule {}
