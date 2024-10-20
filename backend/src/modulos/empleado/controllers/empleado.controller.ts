import { Controller, Param,Get,Post,Put,Body } from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';
import { EmpleadoDto } from '../dto/empleado.dto';

@Controller('empleado')
export class EmpleadoController {
    constructor(
        private servicioEmpleado:EmpleadoService
    ){}
    @Get()
    ConsultarEmpleados(){
        return this.servicioEmpleado.ConsultarEmpleados()
    }

    @Post()
    InsertarCEmpleado(@Body() empleado:EmpleadoDto){
        return this.servicioEmpleado.InsertarEmpleado(empleado)
    }

    @Put()
    ActualizarEmpleado(@Body() empleado:EmpleadoDto){
        return this.servicioEmpleado.ActualizarEmpleado(empleado)
    }

    @Get(':id')
    ConsultarEmpleadoPorId(@Param('id') id:number){
        return this.servicioEmpleado.ConsultarEmpleadoPorIdEmpleado(id)
    }
}
