import { Controller, Param,Get,Post,Put,Body, Delete } from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { EmpleadoDto } from '../dto/empleado.dto';
import { Empleado } from '../entities/empleado.entity';


@Controller('empleado')
export class EmpleadoController {
  constructor(private servicioEmpleado: EmpleadoService) {}
  @Get()
  ConsultarEmpleados() {
    return this.servicioEmpleado.ConsultarEmpleados();
  }

  @Post()
  InsertarCEmpleado(@Body() empleado: EmpleadoDto) {
    return this.servicioEmpleado.InsertarEmpleado(empleado);
  }

  @Put(':id') 
  async actualizarEmpleado(
    @Param('id') id: number, 
    @Body() empleadoDto: EmpleadoDto): Promise<Empleado> {
      empleadoDto.id = id;
      return this.servicioEmpleado.ActualizarEmpleado(empleadoDto);
    }

  @Get(':id')
  ConsultarEmpleadoPorId(@Param('id') id: number) {
    return this.servicioEmpleado.ConsultarEmpleadoPorIdEmpleado(id);
  }
  @Delete(':id')
  async eliminarEmpleado(@Param('id') id: number): Promise<void> {
    await this.servicioEmpleado.EliminarEmpleado(id);
  }
}
