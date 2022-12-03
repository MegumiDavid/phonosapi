import { Test, TestingModule } from '@nestjs/testing';
import { FonosController } from './fonos.controller';

describe('FonosController', () => {
  let controller: FonosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FonosController],
    }).compile();

    controller = module.get<FonosController>(FonosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
