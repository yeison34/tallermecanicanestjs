import { Module } from '@nestjs/common';
import { TipoVehiculoController } from './controllers/tipo-vehiculo.controller';
import { TipoVehiculoService } from './services/tipo-vehiculo.service';

@Module({
  controllers: [TipoVehiculoController],
  providers: [TipoVehiculoService]
})
export class TipoVehiculoModule {}
