import { Test, TestingModule } from '@nestjs/testing';
import { TipoVehiculoController } from './tipo-vehiculo.controller';

describe('TipoVehiculoController', () => {
  let controller: TipoVehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoVehiculoController],
    }).compile();

    controller = module.get<TipoVehiculoController>(TipoVehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
