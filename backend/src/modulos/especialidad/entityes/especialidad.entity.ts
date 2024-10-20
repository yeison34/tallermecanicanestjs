import { Empleado } from '../../empleado/entities/empleado.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nombre: string;

  @Column()
  sueldo: number;

  @Column({ default: true })
  estado: boolean;

  @OneToMany(()=>Empleado,empleado=>empleado.especialidad)
  empleado:Empleado[];
}
