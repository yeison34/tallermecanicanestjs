import { Vehiculo } from "src/modulos/vehiculo/entities/vehiculo.entity";
import { Entity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Cliente{
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

    @OneToMany(()=>Vehiculo,vehiculo=>vehiculo.cliente)
    vehiculos:Vehiculo[];
}