import { Test, TestingModule } from '@nestjs/testing';
import { DrugstoreService } from './drugstore.service';

describe('DrugstoreService', () => {
  let service: DrugstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrugstoreService],
    }).compile();

    service = module.get<DrugstoreService>(DrugstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
