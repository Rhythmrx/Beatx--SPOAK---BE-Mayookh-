import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';
import { PatientUseCase } from './usecases/patient.usecase';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientService,
        {
          provide: PatientUseCase,
          useValue: {
            createPatient: jest.fn(),
            getPatients: jest.fn(),
            getPatientById: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
