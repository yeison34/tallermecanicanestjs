import { Especialidad } from '../../especialidad/entityes/especialidad.entity';
import { Reparacion } from '../../reparacion/entities/reparacion.entity';
import {Entity,Column,PrimaryGeneratedColumn, OneToMany, ManyToMany} from 'typeorm'

@Entity()
export class Empleado{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    cedula:string;

    @Column()
    nombres:string;

    @Column()
    apellidos:string;

    @Column()
    telefono:string;

    @Column()
    email:string;

    @Column()
    direccion:string;   

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fechaingreso:Date;

    @OneToMany(()=>Reparacion,reparacion=>reparacion.empleado)
    reparaciones:Reparacion[];

    @ManyToMany(()=>Especialidad,especialidad=>especialidad.empleado)
    especialidad:Especialidad;
}