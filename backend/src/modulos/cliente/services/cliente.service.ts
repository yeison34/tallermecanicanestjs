import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { ClienteDto } from '../dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>
    ) {}

    ConsultarClientes(): Promise<Cliente[]> {
        return this.clienteRepo.find({ relations: ['vehiculos'] });
    }

    async ObtenerCliente(id: number): Promise<Cliente> {
        const cliente = await this.clienteRepo.findOne({ where: { id }, relations: ['vehiculos'] });
        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return cliente;
    }

    async InsertarCliente(clienteDto: ClienteDto): Promise<Cliente> {
        const clienteCreate = this.clienteRepo.create(clienteDto);
        return this.clienteRepo.save(clienteCreate);
    }

    async ActualizarCliente(id: number, clienteDto: ClienteDto): Promise<Cliente> {
        const clienteActualizar = await this.clienteRepo.findOne({ where: { id } });
        if (!clienteActualizar) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        this.clienteRepo.merge(clienteActualizar, clienteDto);
        return this.clienteRepo.save(clienteActualizar);
    }

    async EliminarCliente(id: number): Promise<void> {
        const cliente = await this.clienteRepo.findOne({ where: { id } });
        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        await this.clienteRepo.remove(cliente);
    }
    async ConsultaClientePorId(id: number): Promise<Cliente> {
        const cliente = await this.clienteRepo.findOne({ where: { id } });
        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return cliente;
    }
}
