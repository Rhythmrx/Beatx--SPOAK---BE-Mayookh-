import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from '../repositories/patient.repository';
import { DeviceRepository } from '../repositories/device.repository';
import { CreateStudyDto, ListStudyDto, UpdateStudyDto } from '../dto/patient.dto';
@Injectable()
export class PatientUseCase {
  constructor(
    private readonly patientRepository: PatientRepository,
    private readonly deviceRepository: DeviceRepository,
  ) {}

  async listexecute(payload: ListStudyDto) {
    return await this.patientRepository.findOne({
      BleDevice: payload.BleDevice,
    });
  }
  async execute(payload: CreateStudyDto) {
    let device = await this.deviceRepository.findByBleDevice(payload.BleDevice);
    if (!device) {
      device = await this.deviceRepository.create({
        bleDevice: payload.BleDevice,
        isAssigned: false,
        assignedPatientId: null,
      });
    }
    console.log(device)
    if (device.dataValues.isAssigned) {
      throw new ConflictException(
        `Device ${payload.BleDevice} is already assigned to another patient.`,
      );
    }
    const patient = await this.patientRepository.create({
      BleDevice: payload.BleDevice,
      ...payload.patientInfo,
      ...payload.studyInfo,
      ...payload.stateInfo,
      status: payload.status,
      deviceId: device.id,
    });
    await this.deviceRepository.assignDevice(device.id, patient.id);

    return patient;
  }
  async update(payload: UpdateStudyDto) {
    const patient = await this.patientRepository.findOne({
      BleDevice: payload.BleDevice,
    });
    if (!patient) throw new NotFoundException('Patient not found');
    if (payload.status === 'Uploaded') {
      await this.deviceRepository.releaseDevice(patient.dataValues.deviceId);
    }
    return this.patientRepository.updateByBleDevice(
      payload.BleDevice,
      {
        status: payload.status,
        DriveStoragePath: payload.DriveStoragePath,
      },
    );
  }
async addDevices(devices: { bleDevice: string }[]) {
  const bleList = devices.map(d => d.bleDevice);
  const existing = await this.deviceRepository.findExistingDevices(bleList);
  const existingSet = new Set(existing.map(e => e.bleDevice));
  const toCreate = devices.filter(d => !existingSet.has(d.bleDevice));
  const alreadyExists = devices.filter(d => existingSet.has(d.bleDevice));
  const created = (
    await Promise.allSettled(
      toCreate.map(d =>
        this.deviceRepository.create({
          bleDevice: d.bleDevice,
          isAssigned: false,
          assignedPatientId: null,
        })
      )
    )
  )
    .filter(r => r.status === 'fulfilled')
    .map((r: any) => r.value);
  if (alreadyExists.length) {
    throw new ConflictException({
      message: 'Some devices already exist',
      existingDevices: alreadyExists.map(d => d.bleDevice),
      createdDevices: created.map(c => c.bleDevice),
      createdCount: created.length,
    });
  }
  return {
    createdDevices: created.map(c => c.dataValues.bleDevice),
    createdCount: created.length,
  };
}
async terminate(query: any) {
  console.log('queryyyy',query)
  const { BleDevice } = query;
  const patient = await this.patientRepository.findOne({ BleDevice });
  if (!patient) {
    throw new NotFoundException('Patient not found');
  }

  const deviceId = patient.dataValues.deviceId;


  const device = await this.deviceRepository.findByBleDevice(BleDevice);
  if (!device) {
    throw new NotFoundException('Device not found for this patient');
  }
  await this.patientRepository.updateByBleDevice(BleDevice, {
    status: 'Terminated',
  });

  await this.deviceRepository.update(deviceId, {
    assignedPatientId: null,
    isAssigned: false,
  });

  return {
    message: 'Patient study terminated successfully',
  };
}



}
