import { Injectable } from '@nestjs/common';
import { PatientUseCase } from './usecases/patient.usecase';
import {
  AddDeviceBatchDto,
  CreateStudyDto,
  ListStudyDto,
  UpdateStudyDto,
} from './dto/patient.dto';

@Injectable()
export class PatientService {
  constructor(private readonly patientUseCase: PatientUseCase) {}
  async add(payload: CreateStudyDto) {
    return await this.patientUseCase.execute(payload);
  }
 async addDevice(payload: AddDeviceBatchDto) {
  return await this.patientUseCase.addDevices(payload.devices);
}

  async list(payload: ListStudyDto) {
    return await this.patientUseCase.listexecute(payload);
  }
  async update(payload: UpdateStudyDto) {
    return await this.patientUseCase.update(payload);
  }
}
