import { forwardRef, Module } from '@nestjs/common';
import { ReparacionService } from './services/reparacion.service';
import { ReparacionController } from './controllers/reparacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reparacion } from './entities/reparacion.entity';
import { EmpleadoModule } from '../empleado/empleado.module';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity';
import { Empleado } from '../empleado/entities/empleado.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reparacion,Vehiculo,Empleado]),
    forwardRef(()=>EmpleadoModule),
    forwardRef(()=>VehiculoModule) 
  ],
  providers: [ReparacionService],
  controllers: [ReparacionController]
})
export class ReparacionModule {}
