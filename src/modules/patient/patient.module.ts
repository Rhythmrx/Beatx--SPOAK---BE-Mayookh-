import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PatientModel } from './entities/patient.model';
import { DeviceModel } from './entities/device.model';

import { PatientRepository } from './repositories/patient.repository';
import { PatientUseCase } from './usecases/patient.usecase';

import { DeviceRepository } from './repositories/device.repository';


@Module({
  imports: [
    SequelizeModule.forFeature([PatientModel, DeviceModel])   
  ],
  controllers: [PatientController],
  providers: [
    PatientService,
    PatientRepository,
    PatientUseCase,
    DeviceRepository,
    DeviceRepository   
  ],
  exports: [
    PatientRepository,
    DeviceRepository,
    DeviceRepository    
  ]
})
export class PatientModule {}
