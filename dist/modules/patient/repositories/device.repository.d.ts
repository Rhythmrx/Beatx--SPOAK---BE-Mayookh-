import { DeviceModel } from '../entities/device.model';
export declare class DeviceRepository {
    private deviceModel;
    constructor(deviceModel: typeof DeviceModel);
    create(data: any): Promise<DeviceModel>;
    findByBleDevice(bleDevice: string): Promise<DeviceModel | null>;
    assignDevice(deviceId: number, patientId: number): Promise<[affectedCount: number]>;
    releaseDevice(deviceId: number): Promise<[affectedCount: number]>;
    findExistingDevices(bleDevices: string[]): Promise<DeviceModel[]>;
}
