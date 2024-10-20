import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TipoVehiculoController } from './controllers/tipo-vehiculo.controller';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';
import { TipoVehiculo } from './entities/tipoVehiculo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoVehiculo]),  
  ],
  controllers: [TipoVehiculoController],
  providers: [TipoVehiculoService]
})
export class TipoVehiculoModule {}
