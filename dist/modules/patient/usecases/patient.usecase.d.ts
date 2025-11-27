import { PatientRepository } from '../repositories/patient.repository';
import { DeviceRepository } from '../repositories/device.repository';
import { CreateStudyDto, ListStudyDto, UpdateStudyDto } from '../dto/patient.dto';
export declare class PatientUseCase {
    private readonly patientRepository;
    private readonly deviceRepository;
    constructor(patientRepository: PatientRepository, deviceRepository: DeviceRepository);
    listexecute(payload: ListStudyDto): Promise<import("../entities/patient.model").PatientModel | null>;
    execute(payload: CreateStudyDto): Promise<import("../entities/patient.model").PatientModel>;
    update(payload: UpdateStudyDto): Promise<{
        DriveStoragePath: string | null;
        status: string;
    }>;
    addDevices(devices: {
        bleDevice: string;
    }[]): Promise<{
        createdDevices: any[];
        createdCount: number;
    }>;
    terminate(query: any): Promise<{
        message: string;
    }>;
}
