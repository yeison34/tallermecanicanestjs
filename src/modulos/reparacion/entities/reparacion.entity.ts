import { Empleado } from "src/modulos/empleado/entities/empleado.entity";
import { Vehiculo } from "src/modulos/vehiculo/entities/vehiculo.entity";
import { Entity,Column,PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Reparacion{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fechaingreso:Date;

    @ManyToOne(()=>Vehiculo,vehiculo=>vehiculo.reparaciones)
    vehiculo:Vehiculo

    @ManyToOne(()=>Empleado,empleado=>empleado.reparaciones)
    empleado:Empleado
}