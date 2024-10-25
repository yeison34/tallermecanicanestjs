import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoVehiculo } from '../entities/tipoVehiculo.entity';

@Injectable()
export class TipoVehiculoService {
    constructor(@InjectRepository(TipoVehiculo) private tipoVehiculoRepo: Repository<TipoVehiculo>) {}

    ConsultarTiposVehiculo(): Promise<TipoVehiculo[]> {
        return this.tipoVehiculoRepo.find();
    }

    async ObtenerTipoVehiculo(id: number): Promise<TipoVehiculo> {
        const tipoVehiculo = await this.tipoVehiculoRepo.findOne({ where: { id } });
        if (!tipoVehiculo) {
            throw new NotFoundException(`Tipo de vehículo con ID ${id} no encontrado`);
        }
        return tipoVehiculo;
    }

    InsertarTipoVehiculo(tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
        const nuevoTipoVehiculo = this.tipoVehiculoRepo.create(tipoVehiculo);
        return this.tipoVehiculoRepo.save(nuevoTipoVehiculo);
    }

    async ActualizarTipoVehiculo(id: number, tipoVehiculo: TipoVehiculo): Promise<TipoVehiculo> {
        const tipoVehiculoActualizar = await this.tipoVehiculoRepo.findOne({ where: { id: id } });
        
        if (!tipoVehiculoActualizar) {
            throw new Error('No se encontró el tipo de vehículo');
        }

        this.tipoVehiculoRepo.merge(tipoVehiculoActualizar, tipoVehiculo);
        return this.tipoVehiculoRepo.save(tipoVehiculoActualizar);
    }

    async EliminarTipoVehiculo(id: number): Promise<void> {
        const resultado = await this.tipoVehiculoRepo.delete(id);
        if (resultado.affected === 0) {
            throw new Error('No se encontró el tipo de vehículo para eliminar');
        }
    }
}
