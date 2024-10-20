import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { EmpleadoModule } from './modulos/empleado/empleado.module';
<<<<<<< HEAD:src/app.module.ts
import { VehiculoModule } from './modulos/vehiculo/vehiculo.module';
=======
import { TipoVehiculoModule } from './modulos/tipovehiculo/tipo-vehiculo.module';
import { VehiculoModule } from './modulos/vehiculo/vehiculo.module';
import { ReparacionModule } from './modulos/reparacion/reparacion.module';
import { EspecialidadModule } from './modulos/especialidad/especialidad.module';
>>>>>>> main:backend/src/app.module.ts
@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'1234',
      database:'tallermecanicanest',
      synchronize:false,
      retryDelay:4000,
      retryAttempts:10,
      entities: ['src/**/*.entity{.ts,.js}'],
    })
<<<<<<< HEAD:src/app.module.ts
    ,EmpleadoModule, ClienteModule, VehiculoModule],
=======
    ,EmpleadoModule,ClienteModule, TipoVehiculoModule, ReparacionModule,VehiculoModule,EspecialidadModule],
>>>>>>> main:backend/src/app.module.ts
  controllers: [],
  providers: [],
})
export class AppModule {}
