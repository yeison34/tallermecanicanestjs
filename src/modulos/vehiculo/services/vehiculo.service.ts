import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Vehiculo } from '../entities/vehiculo.entity';
@Injectable()
export class VehiculoService {
    constructor(
        @InjectRepository(Vehiculo)
        private vehiculoRepo:Repository<Vehiculo>
    ){}

    ConsultarVehiculos():Promise<Vehiculo[]>{
        return this.vehiculoRepo.find()
    }

    EncontrarUno(id:number):Promise<Vehiculo>{
        const vehiculoEncontrado = this.vehiculoRepo.findOne({where:{id:id}});
        if(!vehiculoEncontrado){
            throw new Error("No se encontro el vehiculo")     
        }
        return vehiculoEncontrado;
    }

    InsertarVehiculo(vehiculo: Vehiculo):Promise<Vehiculo>{
        const vehiculoCreate = this.vehiculoRepo.create(vehiculo)
        return this.vehiculoRepo.save(vehiculoCreate)
    }

    async ActualizarVehiculo(id:number, vehiculo:Vehiculo) :Promise<Vehiculo>{
        const vehiculoActualizar = await this.vehiculoRepo.findOne({where:{id:id}})
        if(!vehiculoActualizar){
           throw new Error("No se encontro el vehiculo")     
        }
        this.vehiculoRepo.merge(vehiculoActualizar, vehiculo)
        return this.vehiculoRepo.save(vehiculoActualizar)
    }

    async EliminarVehiculo(id:number):Promise<Vehiculo>{
        const vehiculoElimnar = await this.vehiculoRepo.findOne({where:{id:id}})
        if(!vehiculoElimnar){
           throw new Error("No se encontro el vehiculo")     
        }
        this.vehiculoRepo.delete(vehiculoElimnar);
        return vehiculoElimnar;
    }
}
