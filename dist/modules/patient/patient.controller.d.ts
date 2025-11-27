import { PatientService } from './patient.service';
import { AddDeviceBatchDto, CreateStudyDto, ListStudyDto, UpdateStudyDto } from './dto/patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    addPatient(payload: CreateStudyDto): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
    addDevice(payload: AddDeviceBatchDto): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
    listPatient(payload: ListStudyDto): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
    updatePatient(payload: UpdateStudyDto): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
    terminatePatient(query: any): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
}
