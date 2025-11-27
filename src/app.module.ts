import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './modules/patient/patient.module';
import { AppController } from './app.controller';
import { getDatabaseConfig } from './config/database.config';
import { DeviceModel } from './modules/patient/entities/device.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...getDatabaseConfig(),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),

    PatientModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
