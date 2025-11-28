import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PatientModel } from '../entities/patient.model';  
@Injectable()
export class PatientRepository {
  constructor(
    @InjectModel(PatientModel)
    private patientModel: typeof PatientModel,
  ) {}
  async create(patient: any): Promise<PatientModel> {

    return this.patientModel.create(patient);
  }
 async findOne(where: any): Promise<PatientModel | null> {

  return await this.patientModel.findOne({
    where: {
      ...where,
      DriveStoragePath: null,
      status:"Pending"
    },
     order: [['createdAt', 'ASC']], 
  });
}

async updateByBleDevice(
  BleDevice: string,
  updateData: Partial<{ status: string; DriveStoragePath: string }>,
  patientId?: string
): Promise<{ DriveStoragePath: string | null; status: string }> {

  const whereCondition = {
    BleDevice,
    ...(patientId ? { id: patientId, status: "Pending" } : {})
  };

  const [rowsUpdated, [updatedPatient]] = await this.patientModel.update(
    updateData,
    {
      where: whereCondition,
      returning: true,
      fields: ["status", "DriveStoragePath"],
    }
  );

  if (!updatedPatient) {
    return { DriveStoragePath: null, status: "not-updated" };
  }

  const updated = updatedPatient.get();


  return {
    DriveStoragePath: updated.DriveStoragePath,
    status: updated.status,
  };
}




}
