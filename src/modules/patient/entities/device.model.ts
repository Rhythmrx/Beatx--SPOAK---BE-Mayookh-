import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'devices' })
export class DeviceModel extends Model<DeviceModel> {
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  bleDevice: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAssigned: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  assignedPatientId: number | null;
}
