import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentosService } from './agendamentos.service';

describe('AgendamentosService', () => {
  let provider: AgendamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamentosService],
    }).compile();

    provider = module.get<AgendamentosService>(AgendamentosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
