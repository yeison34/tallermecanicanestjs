import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { ClienteDto } from '../dto/cliente.dto';
@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente) private clienteRepo:Repository<Cliente>
    ){}

    ConsultarClientes():Promise<Cliente[]>{
        return this.clienteRepo.find({relations:['vehiculos']})
    }

    ConsultaClientePorId(id:number):Promise<Cliente>{
        return this.clienteRepo.findOne({where:{id:id}})
    }

    async InsertarCliente(cliente:ClienteDto):Promise<Cliente>{
        const clienteCreate=this.clienteRepo.create(cliente)
        return this.clienteRepo.save(clienteCreate)
    }

    async ActualizarCliente(id:number,cliente:ClienteDto):Promise<Cliente>{
        const clienteActualizar=  await this.clienteRepo.findOne({where:{id:id}})
        if(!clienteActualizar){
           throw new Error("No se ecncontro el registro")     
        }
        this.clienteRepo.merge(clienteActualizar,cliente)
        return this.clienteRepo.save(clienteActualizar)
    }
}
