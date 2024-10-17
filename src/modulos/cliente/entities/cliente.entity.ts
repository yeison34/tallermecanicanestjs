import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

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
}