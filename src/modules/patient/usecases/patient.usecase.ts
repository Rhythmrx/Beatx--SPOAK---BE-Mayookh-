import { ConflictException, Injectable } from '@nestjs/common';
import { PatientRepository } from '../repositories/patient.repository';
import {
  CreateStudyDto,
  ListStudyDto,
  UpdateStudyDto,
} from '../dto/patient.dto';

@Injectable()
export class PatientUseCase {
  constructor(private readonly patientRepository: PatientRepository) {}
  async listexecute(payload: ListStudyDto) {
    return await this.patientRepository.findOne({
      BleDevice: payload.BleDevice,
    });
  }
  async execute(payload: CreateStudyDto) {
    const existing = await this.patientRepository.findOne({
      BleDevice: payload.BleDevice,
    });
    if (existing) {
      throw new ConflictException(
        `Patient with BLE Device ${payload.BleDevice} already exists`,
      );
    }
    const data = {
      BleDevice: payload.BleDevice,
      ...payload.patientInfo,
      ...payload.studyInfo,
      ...payload.stateInfo,
      status: payload.status,
    };
    return this.patientRepository.create(data);
  }
  async update(payload: UpdateStudyDto) {
    const { BleDevice, status, DriveStoragePath } = payload;
    const existing = await this.patientRepository.findOne({
      BleDevice: BleDevice,
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
      BleDevice,
      {
        status: status,
        DriveStoragePath: DriveStoragePath,
      },
    );
    return updatedPatient;
  }
}
