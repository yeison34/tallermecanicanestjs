import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Vehiculo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    placa:string;

    @Column()
    modelo:string;

    @Column()
    marca:string;

    @Column()
    color:string;
    
}