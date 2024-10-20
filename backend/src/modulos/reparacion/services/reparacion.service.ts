import { forwardRef,Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reparacion } from '../entities/reparacion.entity';
import { Repository } from 'typeorm';
import { EmpleadoService } from '../../empleado/services/empleado.service';
import { VehiculoService } from '../../vehiculo/services/vehiculo.service';
import { ReparacionDto } from '../dto/reparacion.dto';

@Injectable()
export class ReparacionService {
    constructor(
        @InjectRepository(Reparacion) private reparacionRepo:Repository<Reparacion>,
        @Inject(forwardRef(()=>EmpleadoService)) private serviceEmpleado:EmpleadoService,
        @Inject(forwardRef(()=>VehiculoService)) private vehiculoService:VehiculoService
    ){}

    async InsertarReparacion(reparacion:ReparacionDto):Promise<Reparacion>{
       const empleado=await this.serviceEmpleado.ConsultarEmpleadoPorIdEmpleado(reparacion.idempleado)
       if(!empleado){
            throw Error("no existe el empleado")
       }     
       const vehiculo=await this.vehiculoService.EncontrarUno(reparacion.idvehiculo)
       if(!vehiculo){
            throw Error("no existe el vehiculo")
       } 
       const reparacionCreate=this.reparacionRepo.create(reparacion)
       reparacionCreate.empleado=empleado
       reparacionCreate.vehiculo=vehiculo
       return this.reparacionRepo.save(reparacionCreate)
    }   
    
    ConsultarReparacionPorId(id:number):Promise<Reparacion>{
        return this.reparacionRepo.findOne({where:{id:id},relations:['vehiculo','empleado']})
    }

    ConsultarReparaciones():Promise<Reparacion[]>{
        return this.reparacionRepo.find({relations:['vehiculo','empleado']})
    }
}
