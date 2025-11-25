import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DeviceModel } from './device.model';


@Table({ tableName: 'patients' })
export class PatientModel extends Model<PatientModel> {
  
  @Column({ type: DataType.STRING })
  BleDevice: string;

  @ForeignKey(() => DeviceModel)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @BelongsTo(() => DeviceModel)
  device: DeviceModel;

  @Column({ type: DataType.STRING }) firstName: string;
  @Column({ type: DataType.STRING }) lastName: string;
  @Column({ type: DataType.STRING }) mobile: string;
  @Column({ type: DataType.STRING }) gender: string;
  @Column({ type: DataType.STRING }) email: string;
  @Column({ type: DataType.STRING }) dob: string;
  @Column({ type: DataType.STRING }) StudyType: string;
  @Column({ type: DataType.STRING }) studyDuration: string;
  @Column({ type: DataType.STRING }) orientation: string;
  @Column({ type: DataType.STRING }) CreatedDate: string;
  @Column({ type: DataType.STRING }) time: string;
  @Column({ type: DataType.STRING }) duration: string;
  @Column({ type: DataType.STRING }) DriveStoragePath: string | null;
  @Column({ type: DataType.STRING }) status: string;
}
