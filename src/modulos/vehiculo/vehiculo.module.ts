import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Injectable()
export class VehiculoService {
    constructor(
        @InjectRepository(Vehiculo) private vehiculoRepository:Repository<Vehiculo>
    ){}

    ConsultarVehiculos():Promise<Vehiculo[]>{
        return this.vehiculoRepository.find()
    }

    InsertarVehiculo(Vehiculo:Vehiculo):Promise<Vehiculo>{
        const VehiculoCreate = this.vehiculoRepository.create(Vehiculo)
        return this.vehiculoRepository.save(VehiculoCreate)
    }

    async ActualizarVehiculo(id: number, vehiculo: Vehiculo):Promise<Vehiculo>{
        const VehiculoActualizar =  await this.vehiculoRepository.findOne({where: { id }})
        if(!VehiculoActualizar){
           throw new NotFoundException(`Vehiculo con ID: ${id} no encontrado`)     
        }
        this.vehiculoRepository.merge(VehiculoActualizar, vehiculo);
        return this.vehiculoRepository.save(VehiculoActualizar)
    }

    async EliminarVehiculo(id: number):Promise<Vehiculo>{
        const vehiculoElimnar = await this.vehiculoRepository.findOne({where:{ id }})
        if(!vehiculoElimnar){
           throw new NotFoundException(`Vehiculo con ID: ${id} no encontrado`)     
        }
        this.vehiculoRepository.remove(vehiculoElimnar);
        return vehiculoElimnar;
    }


}
