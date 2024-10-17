import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class TipoVehiculo {
    @PrimaryGeneratedColumn() 
    id: number;
    @Column({ unique: true }) 
    nombre: string; 
    @Column({ type: 'boolean', default: true }) 
    esactivo: boolean;
}