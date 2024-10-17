
import { Body, Controller,Get, Param, Post,Put,Delete } from '@nestjs/common';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../entities/vehiculo.entity';

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
    InsertarVehiculo(@Body() vehiculo:Vehiculo){
        try{
            return this.vehiculoService.InsertarVehiculo(vehiculo)
        } catch(ex){
            throw ex
        }
    }
    
    @Put(":id")
    ActulizarVehiculo(@Param('id') id:number,@Body() vehiculo:Vehiculo){
        try{
            return this.vehiculoService.ActualizarVehiculo(id,vehiculo)   
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


