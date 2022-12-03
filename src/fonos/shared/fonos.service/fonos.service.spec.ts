import { Test, TestingModule } from '@nestjs/testing';
import { FonosService } from './fonos.service';

describe('FonosService', () => {
  let provider: FonosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonosService],
    }).compile();

    provider = module.get<FonosService>(FonosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
