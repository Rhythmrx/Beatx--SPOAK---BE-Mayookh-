import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PatientModule } from './modules/patient/patient.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(DatabaseConfig),
    PatientModule,
  ],
})
export class AppModule {}
