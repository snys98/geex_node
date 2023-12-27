import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from './logger';

describe('LogService', () => {
  let service: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Logger],
    }).compile();

    service = await module.resolve<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
