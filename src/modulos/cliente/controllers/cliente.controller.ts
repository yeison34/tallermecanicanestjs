import { Body, Controller,Get, Param, Post,Put } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../entities/cliente.entity';
import { ClienteDto } from '../dto/cliente.dto';

@Controller('cliente')
export class ClienteController {
    
    constructor(
        private clienteService:ClienteService
    ){}
    @Get()
    ConsultarClientes(){
       return this.clienteService.ConsultarClientes() 
    }

    @Post()
    InsertarCliente(@Body() cliente:ClienteDto){
        try{
            return this.clienteService.InsertarCliente(cliente)
        }catch(ex){
            throw ex
        }
    }

    @Put(":id")
    ActulizarCliente(@Param('id') id:number,@Body() cliente:ClienteDto){
        try{
            return this.clienteService.ActualizarCliente(id,cliente)   
        }catch(ex){
            throw ex
        }
    }
}
