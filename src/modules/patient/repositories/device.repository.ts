import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeviceModel } from '../entities/device.model';


@Injectable()
export class DeviceRepository {
  constructor(
    @InjectModel(DeviceModel)
    private deviceModel: typeof DeviceModel,
  ) {}

  create(data: any) {
    return this.deviceModel.create(data);
  }

  findByBleDevice(bleDevice: string) {
    return this.deviceModel.findOne({ where: { bleDevice } });
  }

  assignDevice(deviceId: number, patientId: number) {
    return this.deviceModel.update(
      {
        isAssigned: true,
        assignedPatientId: patientId,
      },
      { where: { id: deviceId } },
    );
  }
    releaseDevice(deviceId: number) {
    return this.deviceModel.update(
      {
        isAssigned: false,
        assignedPatientId: null,
      },
      { where: { id: deviceId } },
    );
  }
  findExistingDevices(bleDevices: string[]) {
  return this.deviceModel.findAll({
    where: { bleDevice: bleDevices },
  });
}
async update(id: number, data: any) {
  return this.deviceModel.update(data, { where: { id } });
}


  


}
