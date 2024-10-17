import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { EmpleadoModule } from './modulos/empleado/empleado.module';
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
      retryDelay:3000,
      retryAttempts:10,
      entities:['src/**/*.entity{.ts,.js}']
    })
    ,EmpleadoModule,ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
