import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_vehiculo') 
export class TipoVehiculo {
    @PrimaryGeneratedColumn() 
    id_tipo: number; 

    @Column({ unique: true }) 
    nombre: string; 
    @Column({ type: 'boolean', default: true }) 
    es_activo: boolean;
}