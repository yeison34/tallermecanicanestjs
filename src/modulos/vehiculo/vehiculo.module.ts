import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoController } from './controllers/vehiculo.controller';
import { VehiculoService } from './services/vehiculo.service';
import { Vehiculo} from './entities/vehiculo.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehiculo])
  ],
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}