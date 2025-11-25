import { Model } from 'sequelize-typescript';
export declare class DeviceModel extends Model<DeviceModel> {
    bleDevice: string;
    isAssigned: boolean;
    assignedPatientId: number | null;
}
