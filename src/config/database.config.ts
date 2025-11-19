import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { PatientModel } from '../modules/patient/entities/patient.model';

export function getDatabaseConfig(): SequelizeModuleOptions {
  
  const isSSL = process.env.DB_SSL === 'true';
  return {
    dialect: 'postgres',
    schema: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    autoLoadModels: true,
    synchronize: true,
    models: [PatientModel],
    logging: false,

    ...(isSSL && {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
  };
}
