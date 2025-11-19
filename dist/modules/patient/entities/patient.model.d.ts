import { Model } from 'sequelize-typescript';
export declare class PatientModel extends Model<PatientModel> {
    BleDevice: string;
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
