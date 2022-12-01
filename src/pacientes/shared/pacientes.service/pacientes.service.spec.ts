import { Test, TestingModule } from '@nestjs/testing';
import { PacientesService } from './pacientes.service';

describe('PacientesService', () => {
  let provider: PacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacientesService],
    }).compile();

    provider = module.get<PacientesService>(PacientesService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
