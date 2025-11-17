
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { PatientModel } from 'src/modules/patient/entities/patient.model';
export const DatabaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'Beatx-spoke',
      autoLoadModels: true,
      synchronize: true, 
      models: [PatientModel],
      logging: false,
};
