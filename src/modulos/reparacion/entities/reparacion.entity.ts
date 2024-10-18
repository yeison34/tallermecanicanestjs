import { Empleado } from "../../empleado/entities/empleado.entity";
import { Vehiculo } from "../../vehiculo/entities/vehiculo.entity";
import { Entity,Column,PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Reparacion{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fechaingreso:Date;

    @ManyToOne(()=>Vehiculo,vehiculo=>vehiculo.reparaciones)
    vehiculo:Vehiculo;

    @ManyToOne(()=>Empleado,empleado=>empleado.reparaciones)
    empleado:Empleado;
}