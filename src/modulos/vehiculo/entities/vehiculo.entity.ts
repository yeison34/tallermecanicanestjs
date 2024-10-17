import { Cliente } from 'src/modulos/cliente/entities/cliente.entity';
import { Reparacion } from 'src/modulos/reparacion/entities/reparacion.entity';
import { TipoVehiculo } from 'src/modulos/tipovehiculo/entities/tipoVehiculo.entity';
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'

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
    
    @ManyToOne(()=>TipoVehiculo,tipoVehiculo=>tipoVehiculo.vehiculos)
    tipovehiculo:TipoVehiculo;

    @ManyToOne(()=>Cliente,cliente=>cliente.vehiculos)
    cliente:Cliente;

    @OneToMany(()=>Reparacion,reparacion=>reparacion.vehiculo)
    reparaciones:Reparacion[]

}