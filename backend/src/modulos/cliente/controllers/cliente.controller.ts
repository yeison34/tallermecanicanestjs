import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../entities/cliente.entity';
import { ClienteDto } from '../dto/cliente.dto';

@Controller('clientes')
export class ClienteController {
    
    constructor(private clienteService: ClienteService) {}

    @Get()
    ConsultarClientes() {
        return this.clienteService.ConsultarClientes();
    }

    @Get(':id')
    async obtenerCliente(@Param('id') id: number) {
        const cliente = await this.clienteService.ObtenerCliente(id);
        if (!cliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return cliente;
    }

    @Post()
    InsertarCliente(@Body() cliente: ClienteDto) {
        try {
            return this.clienteService.InsertarCliente(cliente);
        } catch (ex) {
            throw ex;
        }
    }

    @Put(':id')
    ActualizarCliente(@Param('id') id: number, @Body() cliente: ClienteDto) {
        try {
            return this.clienteService.ActualizarCliente(id, cliente);
        } catch (ex) {
            throw ex;
        }
    }

    @Delete(':id')
    EliminarCliente(@Param('id') id: number) {
        return this.clienteService.EliminarCliente(id);
    }
}
