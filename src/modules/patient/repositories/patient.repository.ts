import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PatientModel } from "../entities/patient.model";

@Injectable()
export class PatientRepository {
  constructor(
    @InjectModel(PatientModel)
    private patientModel: typeof PatientModel,
  ) {}
  async create(patient :any):Promise <PatientModel>{
    return this.patientModel.create(patient)
  }
 async findOne(where: any): Promise<PatientModel | null> {
    return this.patientModel.findOne({ where });
  }
 async updateByBleDevice(
    BleDevice: string,
    updateData: Partial<{ status: string; DriveStoragePath: string }>
  ): Promise<{ DriveStoragePath: string | null; status: string  }> {
    const [rowsUpdated, [updatedPatient]] = await this.patientModel.update(updateData, {
      where: { BleDevice },
      returning: true, 
      fields: ['status', 'DriveStoragePath'], 
    });
    const updated = updatedPatient.get();
    return {
      DriveStoragePath: updated.DriveStoragePath ,
      status: updated.status ,
    };
  }
}