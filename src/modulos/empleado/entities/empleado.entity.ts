import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

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
    fechaingreso:Date
}