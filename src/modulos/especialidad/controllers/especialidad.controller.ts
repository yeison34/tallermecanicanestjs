import { Controller, Get, Post, Put, Delete, Param, Body, } from '@nestjs/common';
import { EspecialidadService } from '../services/especialidad.service';
import { Especialidad } from 'src/modulos/especialidad/entityes/especialidad.entity'; // Asegúrate de importar la entidad correcta

@Controller('especialidad')
export class EspecialidadController {
    constructor(private readonly especialidadService: EspecialidadService) { }

    // Obtener todas las especialidades
    @Get()
    async getAll(): Promise<Especialidad[]> {
        return await this.especialidadService.findAll();
    }

    // Obtener una especialidad por ID
    @Get(':id')
    async getOne(@Param('id') id: number): Promise<Especialidad> {
        return await this.especialidadService.findOne(id);
    }

    // Crear una nueva especialidad
    @Post()
    async crear(@Body() especialidad: Especialidad): Promise<Especialidad> {
        return await this.especialidadService.create(especialidad);
    }

    // Actualizar una especialidad existente
    @Put(':id')
    async actualizar(
        @Param('id') id: number,
        @Body() especialidad: Especialidad,
    ): Promise<Especialidad> {
        return await this.especialidadService.update(id, especialidad);
    }

    // Eliminar una especialidad por ID
    @Delete(':id')
    async eliminar(@Param('id') id: number): Promise<void> {
        return await this.especialidadService.delete(id);
    }
}
