import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { EmpleadoModule } from './modulos/empleado/empleado.module';
import { TipoVehiculoModule } from './modulos/tipovehiculo/tipo-vehiculo.module';
import { VehiculoModule } from './modulos/vehiculo/vehiculo.module';
import { ReparacionModule } from './modulos/reparacion/reparacion.module';
@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'3424',
      database:'tallermecanicanest',
      synchronize:false,
      retryDelay:4000,
      retryAttempts:10,
      entities:[__dirname + '/../**/*.entity{.ts,.js}']
    })
    ,EmpleadoModule,ClienteModule, TipoVehiculoModule, ReparacionModule,VehiculoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
