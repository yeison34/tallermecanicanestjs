import { Module } from '@nestjs/common';
import { ReparacionService } from './services/reparacion.service';
import { ReparacionController } from './controllers/reparacion.controller';

@Module({
  providers: [ReparacionService],
  controllers: [ReparacionController]
})
export class ReparacionModule {}
