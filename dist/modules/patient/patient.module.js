"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const common_1 = require("@nestjs/common");
const patient_controller_1 = require("./patient.controller");
const patient_service_1 = require("./patient.service");
const sequelize_1 = require("@nestjs/sequelize");
const patient_model_1 = require("./entities/patient.model");
const device_model_1 = require("./entities/device.model");
const patient_repository_1 = require("./repositories/patient.repository");
const patient_usecase_1 = require("./usecases/patient.usecase");
const device_repository_1 = require("./repositories/device.repository");
let PatientModule = class PatientModule {
};
exports.PatientModule = PatientModule;
exports.PatientModule = PatientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([patient_model_1.PatientModel, device_model_1.DeviceModel])
        ],
        controllers: [patient_controller_1.PatientController],
        providers: [
            patient_service_1.PatientService,
            patient_repository_1.PatientRepository,
            patient_usecase_1.PatientUseCase,
            device_repository_1.DeviceRepository,
            device_repository_1.DeviceRepository
        ],
        exports: [
            patient_repository_1.PatientRepository,
            device_repository_1.DeviceRepository,
            device_repository_1.DeviceRepository
        ]
    })
], PatientModule);
//# sourceMappingURL=patient.module.js.map