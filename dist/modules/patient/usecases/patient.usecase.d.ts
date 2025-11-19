import { PatientRepository } from '../repositories/patient.repository';
import { CreateStudyDto, ListStudyDto, UpdateStudyDto } from '../dto/patient.dto';
export declare class PatientUseCase {
    private readonly patientRepository;
    constructor(patientRepository: PatientRepository);
    listexecute(payload: ListStudyDto): Promise<import("../entities/patient.model").PatientModel | null>;
    execute(payload: CreateStudyDto): Promise<import("../entities/patient.model").PatientModel>;
    update(payload: UpdateStudyDto): Promise<{
        DriveStoragePath: string | null;
        status: string;
    }>;
}
