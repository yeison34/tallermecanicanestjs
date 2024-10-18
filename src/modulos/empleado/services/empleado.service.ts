import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { EspecialidadService } from '../../especialidad/services/especialidad.service';
import { EmpleadoDto } from '../dto/empleado.dto';

@Injectable()
export class EmpleadoService {
    constructor(
        @InjectRepository(Empleado) private empleadoRepo:Repository<Empleado>,
        private serviceEspecialidad:EspecialidadService
    ){}

    ConsultarEmpleados():Promise<Empleado[]>{
        return this.empleadoRepo.find({relations:['especialidad']})
    }

    async InsertarEmpleado(empleado:EmpleadoDto):Promise<Empleado>{
        const especialidad=await this.serviceEspecialidad.findOne(empleado.idespecialidad)
        if(!especialidad){
            throw Error("No se encuentra registrada la especialidad");
        }
        const empleadoCreate=this.empleadoRepo.create(empleado)
        empleadoCreate.especialidad=especialidad
        return this.empleadoRepo.save(empleadoCreate)
    }

    async ActualizarEmpleado(empleado:EmpleadoDto):Promise<Empleado>{
        const empleadoActualizar=await this.empleadoRepo.findOne({where:{id:empleado.id},relations:['especialidad']})
        const especialidad=await this.serviceEspecialidad.findOne(empleado.idespecialidad)
        if(!especialidad){
            throw Error("No se encuentra registrada la especialidad");
        }
        this.empleadoRepo.merge(empleadoActualizar,empleado)
        return this.empleadoRepo.save(empleadoActualizar)
    }

    ConsultarEmpleadoPorIdEmpleado(id:number):Promise<Empleado>{
        return this.empleadoRepo.findOne({where:{id:id},relations:['especialidad']})
    }
}
