import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoVehiculo } from '../entities/tipoVehiculo.entity';

@Injectable()
export class TipoVehiculoService {
    constructor(
        @InjectRepository(TipoVehiculo) private tipoVehiculoRepo: Repository<TipoVehiculo>
    ) {}

    ConsultarTiposVehiculo(): Promise<TipoVehiculo[]> {
        return this.tipoVehiculoRepo.find();
    }

    InsertarTipoVehiculo(tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
        const nuevoTipoVehiculo = this.tipoVehiculoRepo.create(tipoVehiculo);
        return this.tipoVehiculoRepo.save(nuevoTipoVehiculo);
    }

    async ActualizarTipoVehiculo(id: number, tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
        const tipoVehiculoActualizar = await this.tipoVehiculoRepo.findOne({ where: { id_tipo: id } });
        
        if (!tipoVehiculoActualizar) {
            throw new Error('No se encontró el tipo de vehículo');
        }

        this.tipoVehiculoRepo.merge(tipoVehiculoActualizar, tipoVehiculo);
        return this.tipoVehiculoRepo.save(tipoVehiculoActualizar);
    }
}
