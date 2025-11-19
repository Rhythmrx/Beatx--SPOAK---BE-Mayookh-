import { PatientUseCase } from './usecases/patient.usecase';
import { CreateStudyDto, ListStudyDto, UpdateStudyDto } from './dto/patient.dto';
export declare class PatientService {
    private readonly patientUseCase;
    constructor(patientUseCase: PatientUseCase);
    add(payload: CreateStudyDto): Promise<import("./entities/patient.model").PatientModel>;
    list(payload: ListStudyDto): Promise<import("./entities/patient.model").PatientModel | null>;
    update(payload: UpdateStudyDto): Promise<{
        DriveStoragePath: string | null;
        status: string;
    }>;
}
