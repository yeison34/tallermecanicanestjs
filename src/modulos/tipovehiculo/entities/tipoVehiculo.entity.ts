import { Vehiculo } from 'src/modulos/vehiculo/entities/vehiculo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity() 
export class TipoVehiculo {
    @PrimaryGeneratedColumn() 
    id: number;
    @Column({ unique: true }) 
    nombre: string; 
    @Column({ type: 'boolean', default: true }) 
    esactivo: boolean;
    @OneToMany(()=>Vehiculo,vehiculo=>vehiculo.tipovehiculo)
    vehiculos:Vehiculo[]
}