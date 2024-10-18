import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoController } from './controllers/vehiculo.controller';
import { VehiculoService } from './services/vehiculo.service';
import { Vehiculo} from './entities/vehiculo.entity'
import { TipoVehiculoModule } from '../tipovehiculo/tipo-vehiculo.module';
import { TipoVehiculo } from '../tipovehiculo/entities/tipoVehiculo.entity';
import { ClienteModule } from '../cliente/cliente.module';
import { Cliente } from '../cliente/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehiculo,TipoVehiculo]),
    TipoVehiculoModule,
    forwardRef(()=>ClienteModule)  ],
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}