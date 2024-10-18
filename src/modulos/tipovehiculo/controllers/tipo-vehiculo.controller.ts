import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TipoVehiculoService } from '../services/tipo-vehiculo.service';
import { TipoVehiculo } from '../entities/tipoVehiculo.entity';

@Controller('tipo-vehiculo')
export class TipoVehiculoController {
    
    constructor(
        private tipoVehiculoService: TipoVehiculoService
    ) {}

    @Get()
    ConsultarTiposVehiculo() {
       return this.tipoVehiculoService.ConsultarTiposVehiculo();
    }

    @Post()
    InsertarTipoVehiculo(@Body() tipoVehiculo: TipoVehiculo) {
        try {
            return this.tipoVehiculoService.InsertarTipoVehiculo(tipoVehiculo);
        } catch (ex) {
            throw ex;
        }
    }

    @Put(':id')
    ActualizarTipoVehiculo(@Param('id') id: number, @Body() tipoVehiculo: TipoVehiculo) {
        try {
            return this.tipoVehiculoService.ActualizarTipoVehiculo(id, tipoVehiculo);
        } catch (ex) {
            throw ex;
        }
    }

    @Delete(':id')
    EliminarTipoVehiculo(@Param('id') id: number) {
        try {
            return this.tipoVehiculoService.EliminarTipoVehiculo(id);
        } catch (ex) {
            throw ex;
        }
    }
}
