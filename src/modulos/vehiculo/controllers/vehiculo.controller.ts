
import { Body, Controller,Get, Param, Post,Put,Delete } from '@nestjs/common';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../entities/vehiculo.entity';
import { VehiculoDto } from '../dto/vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
    constructor(
        private vehiculoService:VehiculoService
    ){}

    @Get()
    ConsultarVehiculos(){
       return this.vehiculoService.ConsultarVehiculos() 
    }

    @Get(":id")
    ConsultarUnoVehiculo(@Param('id') id:number){
       return this.vehiculoService.EncontrarUno(id) ;
    }
    
    @Post()
    InsertarVehiculo(@Body() vehiculo:VehiculoDto){
        try{
            return this.vehiculoService.InsertarVehiculo(vehiculo)
        } catch(ex){
            throw ex
        }
    }
    
    @Put()
    ActulizarVehiculo(@Body() vehiculo:VehiculoDto){
        try{
            return this.vehiculoService.ActualizarVehiculo(vehiculo)   
        }catch(ex){
            throw ex
        }
    }

    @Delete(":id")
    EliminarVehiculo(@Param('id') id:number){
        try{
            return this.vehiculoService.EliminarVehiculo(id)   
        }catch(ex){
            throw ex
        }
    }
}


