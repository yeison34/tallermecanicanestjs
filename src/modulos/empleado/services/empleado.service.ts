import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
@Injectable()
export class EmpleadoService {
    constructor(
        @InjectRepository(Empleado) private empleadoRepo:Repository<Empleado>
    ){}

    ConsultarEmpleados():Promise<Empleado[]>{
        return this.empleadoRepo.find()
    }
}
