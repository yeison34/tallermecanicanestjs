import { Controller, Get,Param,Post,Body } from '@nestjs/common';
import { ReparacionDto } from '../dto/reparacion.dto';
import { ReparacionService } from '../services/reparacion.service';

@Controller('reparacion')
export class ReparacionController {
    constructor(
        private reparacionService:ReparacionService
    ){}
    @Post()
    InsertarReparacion(@Body() reparacion:ReparacionDto){
        return this.reparacionService.InsertarReparacion(reparacion)
    }
    @Get(':id')
    ConsultarReparacionPorId(@Param('id') id:number){
        return this.reparacionService.ConsultarReparacionPorId(id)
    }
    @Get()
    ConsultarReparaciones(){
        return this.reparacionService.ConsultarReparaciones()
    }
}
