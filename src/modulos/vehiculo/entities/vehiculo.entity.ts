import { Cliente } from 'src/modulos/cliente/entities/cliente.entity';
//import { TipoVehiculo } from 'src/modulos/tipovehiculo/entities/tipovehiculo.entity';
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity("vehiculo")
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: "varchar"})
    placa:string;

    @Column({type: "varchar"})
    modelo:string;

    @Column({type: "varchar"})
    marca:string;

    @Column({type: "varchar"})
    color:string;

    @Column({type: "varchar", unique:true})
    cedula:string;

    // @ManyToOne(() => TipoVehiculo, tipoVehiculo => tipoVehiculo.id)
    // idtipovehiculo: TipoVehiculo;

    @ManyToOne(() => Cliente, cliente => cliente.id)
    idcliente: Cliente;
    
}