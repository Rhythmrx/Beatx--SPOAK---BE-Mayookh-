export declare class PatientInfoDto {
    firstName: string;
    lastName: string;
    mobile: string;
    gender: string;
    email: string;
    dob: string;
}
export declare class StudyInfoDto {
    StudyType: string;
    studyDuration: string;
    orientation: string;
}
export declare class StateInfoDto {
    CreatedDate: string;
    time: string;
    duration: string;
}
export declare class CreateStudyDto {
    BleDevice: string;
    patientInfo: PatientInfoDto;
    studyInfo: StudyInfoDto;
    stateInfo: StateInfoDto;
    status: string;
}
export declare class UpdateStudyDto {
    BleDevice: string;
    status: string;
    DriveStoragePath: string;
}
export declare class ListStudyDto {
    BleDevice: string;
}
export declare class DeviceItemDto {
    bleDevice: string;
}
export declare class AddDeviceBatchDto {
    devices: DeviceItemDto[];
}
