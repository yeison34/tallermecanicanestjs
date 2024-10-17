import { Controller } from '@nestjs/common';
import { EmpleadoService } from '../services/empleado.service';

@Controller('empleado')
export class EmpleadoController {
    constructor(
        private servicioEmpleado:EmpleadoService
    ){}
    ConsultarEmpleados(){
        return this.servicioEmpleado.ConsultarEmpleados()
    }
}
