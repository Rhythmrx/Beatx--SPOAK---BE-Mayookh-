import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PatientModel } from './entities/patient.model';
import { PatientRepository } from './repositories/patient.repository';
import { PatientUseCase } from './usecases/patient.usecase';
@Module({
  imports: [SequelizeModule.forFeature([PatientModel])],
  controllers: [PatientController],
  providers: [PatientService, PatientRepository, PatientUseCase],
})
export class PatientModule {}
