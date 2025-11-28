import { PatientModel } from '../entities/patient.model';
export declare class PatientRepository {
    private patientModel;
    constructor(patientModel: typeof PatientModel);
    create(patient: any): Promise<PatientModel>;
    findOne(where: any): Promise<PatientModel | null>;
    updateByBleDevice(BleDevice: string, updateData: Partial<{
        status: string;
        DriveStoragePath: string;
    }>, patientId?: string): Promise<{
        DriveStoragePath: string | null;
        status: string;
    }>;
}
