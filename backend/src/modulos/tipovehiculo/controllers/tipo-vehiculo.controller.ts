import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { TipoVehiculoService } from '../services/tipo-vehiculo.service';
import { TipoVehiculo } from '../entities/tipoVehiculo.entity';

@Controller('tipovehiculo')
export class TipoVehiculoController {
    
    constructor(private tipoVehiculoService: TipoVehiculoService) {}

    @Get()
    ConsultarTiposVehiculo() {
        return this.tipoVehiculoService.ConsultarTiposVehiculo();
    }

    @Get(':id')
    async obtenerTipoVehiculo(@Param('id') id: number) {
        const tipoVehiculo = await this.tipoVehiculoService.ObtenerTipoVehiculo(id);
        if (!tipoVehiculo) {
            throw new NotFoundException(`Tipo de vehículo con ID ${id} no encontrado`);
        }
        return tipoVehiculo;
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
        return this.tipoVehiculoService.EliminarTipoVehiculo(id);
    }
}
