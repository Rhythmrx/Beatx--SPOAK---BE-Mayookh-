import { Model } from 'sequelize-typescript';
import { DeviceModel } from './device.model';
export declare class PatientModel extends Model<PatientModel> {
    BleDevice: string;
    deviceId: number;
    device: DeviceModel;
    firstName: string;
    lastName: string;
    mobile: string;
    gender: string;
    email: string;
    dob: string;
    StudyType: string;
    studyDuration: string;
    orientation: string;
    CreatedDate: string;
    time: string;
    duration: string;
    DriveStoragePath: string | null;
    status: string;
}
