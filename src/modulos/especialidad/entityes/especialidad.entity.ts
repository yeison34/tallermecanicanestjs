import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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
}
