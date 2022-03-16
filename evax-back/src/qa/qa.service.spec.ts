import { Test, TestingModule } from '@nestjs/testing';
import { QaService } from './qa.service';

describe('QaService', () => {
  let service: QaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaService],
    }).compile();

    service = module.get<QaService>(QaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
