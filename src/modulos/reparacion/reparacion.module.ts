import { Module } from '@nestjs/common';
import { ReparacionService } from './services/reparacion.service';
import { ReparacionController } from './controllers/reparacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reparacion } from './entities/reparacion.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Reparacion])
  ],
  providers: [ReparacionService],
  controllers: [ReparacionController]
})
export class ReparacionModule {}
