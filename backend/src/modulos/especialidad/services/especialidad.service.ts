import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from '../entityes/especialidad.entity'; // Asegúrate de importar la entidad correcta

@Injectable()
export class EspecialidadService {
    constructor(
        @InjectRepository(Especialidad)
        private readonly especialidadRepository: Repository<Especialidad>,
    ) { }

    // Obtener todas las especialidades
    async findAll(): Promise<Especialidad[]> {
        return await this.especialidadRepository.find();
    }

    // Obtener una especialidad por ID
    async findOne(id: number): Promise<Especialidad> {
        const encontrado = await this.especialidadRepository.findOne({
        where: { id },
        });
        if (!encontrado) {
            throw new NotFoundException('Especialidad con ID ' + id + ' no encontrado');
        }
        return  encontrado;

    }

    // Crear una nueva especialidad
    async create(especialidad: Especialidad): Promise<Especialidad> {
        return await this.especialidadRepository.save(especialidad);
    }

    // Actualizar una especialidad
    async update(id: number, especialidad: Especialidad): Promise<Especialidad> {
        const encontrado = await this.especialidadRepository.findOne({
                where: { id },
                });
        if (!encontrado) {
            throw new NotFoundException('Especialidad con ID ' + id + ' no encontrado');
            }
        await this.especialidadRepository.update(id, especialidad);
        return this.findOne(id);
    }

    // Eliminar una especialidad
    async delete(id: number): Promise<void> {
        const encontrado = await this.especialidadRepository.findOne({
                where: { id },
            });
        if (!encontrado) {
                throw new NotFoundException('Especialidad con ID ' + id + ' no encontrado');
            }
        await this.especialidadRepository.delete(id);
    }
}
