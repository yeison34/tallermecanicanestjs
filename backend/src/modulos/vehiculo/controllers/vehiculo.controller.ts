import { Body, Controller, Get, Param, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { VehiculoService } from '../services/vehiculo.service';
import { VehiculoDto } from '../dto/vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private vehiculoService: VehiculoService) {}

  @Get()
  ConsultarVehiculos() {
    return this.vehiculoService.ConsultarVehiculos();
  }

  @Get(':id')
  ConsultarUnoVehiculo(@Param('id') id: number) {
    return this.vehiculoService.EncontrarUno(id);
  }

  @Post()
  async InsertarVehiculo(@Body() vehiculo: VehiculoDto) {
    try {
      return await this.vehiculoService.InsertarVehiculo(vehiculo);
    } catch (error) {
      if (error.message === 'Este vehículo ya está registrado.') {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'Este vehículo ya está registrado.'
        }, HttpStatus.CONFLICT);
      }
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Ocurrió un error al crear el vehículo.'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  async ActulizarVehiculo(@Body() vehiculo: VehiculoDto) {
    try {
      return await this.vehiculoService.ActualizarVehiculo(vehiculo);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Ocurrió un error al actualizar el vehículo.'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async EliminarVehiculo(@Param('id') id: number) {
    try {
      return await this.vehiculoService.EliminarVehiculo(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Ocurrió un error al eliminar el vehículo.'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
