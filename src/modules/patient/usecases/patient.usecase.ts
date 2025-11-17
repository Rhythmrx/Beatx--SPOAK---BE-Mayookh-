import { ConflictException, Injectable } from '@nestjs/common';
import { PatientRepository } from '../repositories/patient.repository';
import {CreateStudyDto,ListStudyDto,UpdateStudyDto,} from '../dto/patient.dto';

@Injectable()
export class PatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}
  async listexecute(payload: ListStudyDto) {
    return  await this.patientRepository.findOne({
      BleDevice: payload.bleDevice,
    });
  }
  async execute(payload: CreateStudyDto) {
    const existing = await this.patientRepository.findOne({
      BleDevice: payload.bleDevice,
    });
    if (existing) {
      throw new ConflictException(
        `Patient with BLE Device ${payload.bleDevice} already exists`,
      );
    }
    const data = {
      BleDevice: payload.bleDevice,
      ...payload.patientInfo,
      ...payload.studyInfo,
      ...payload.stateInfo,
      status: payload.status,
    };
    return this.patientRepository.create(data);
  }
  async update(payload: UpdateStudyDto) {
    const { bleDevice, status, driveStoragePath } = payload;
    const existing = await this.patientRepository.findOne({
      BleDevice: bleDevice,
    });
    if (existing) {
      if (
        existing.dataValues.DriveStoragePath &&
        existing.dataValues.status === 'Uploaded'
      ) {
        throw new ConflictException(
          `Patient study already completed with DriveStoragePath`,
        );
      }
    }

    const updatedPatient = await this.patientRepository.updateByBleDevice(
      bleDevice,
      {
        status: status,
        DriveStoragePath: driveStoragePath,
      },
    );
    return updatedPatient;
  }
}
