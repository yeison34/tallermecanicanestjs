import { Reparacion } from 'src/modulos/reparacion/entities/reparacion.entity';
import { Vehiculo } from 'src/modulos/vehiculo/entities/vehiculo.entity';
import {Entity,Column,PrimaryGeneratedColumn, OneToMany} from 'typeorm'

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
    reparaciones:Reparacion[]
}