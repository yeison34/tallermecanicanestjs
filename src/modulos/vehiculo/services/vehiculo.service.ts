import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Vehiculo } from '../entities/vehiculo.entity';
import { TipoVehiculo } from '../../tipovehiculo/entities/tipoVehiculo.entity';
import { VehiculoDto } from '../dto/vehiculo.dto';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { ClienteService } from '../../cliente/services/cliente.service';
@Injectable()
export class VehiculoService {
    constructor(
        @InjectRepository(Vehiculo) private vehiculoRepo:Repository<Vehiculo>,
        @InjectRepository(TipoVehiculo) private tipoVehiculorepo:Repository<TipoVehiculo>,
        @Inject(forwardRef(()=>ClienteService)) private clienteservicio:ClienteService
    ){}

    ConsultarVehiculos():Promise<Vehiculo[]>{
        return this.vehiculoRepo.find()
    }

    EncontrarUno(id:number):Promise<Vehiculo>{
        const vehiculoEncontrado = this.vehiculoRepo.findOne({where:{id:id},relations:['tipovehiculo','cliente']});
        if(!vehiculoEncontrado){
            throw new Error("No se encontro el vehiculo")     
        }
        return vehiculoEncontrado;
    }

    async InsertarVehiculo(vehiculo: VehiculoDto):Promise<Vehiculo>{
        const vehiculoCreate = this.vehiculoRepo.create(vehiculo)
        const tipovehiculo=await this.tipoVehiculorepo.findOne({where:{id:vehiculo.idtipovehiculo}})
        if(!tipovehiculo){
            throw Error("No se encontro el tipo de vehiculo")
        }
        const cliente=await this.clienteservicio.ConsultaClientePorId(vehiculo.idcliente)
        vehiculoCreate.tipovehiculo=tipovehiculo
        vehiculoCreate.cliente=cliente
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
