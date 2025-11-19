"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientUseCase = void 0;
const common_1 = require("@nestjs/common");
const patient_repository_1 = require("../repositories/patient.repository");
let PatientUseCase = class PatientUseCase {
    patientRepository;
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async listexecute(payload) {
        return await this.patientRepository.findOne({
            BleDevice: payload.BleDevice,
        });
    }
    async execute(payload) {
        const existing = await this.patientRepository.findOne({
            BleDevice: payload.BleDevice,
        });
        if (existing) {
            throw new common_1.ConflictException(`Patient with BLE Device ${payload.BleDevice} already exists`);
        }
        const data = {
            BleDevice: payload.BleDevice,
            ...payload.patientInfo,
            ...payload.studyInfo,
            ...payload.stateInfo,
            status: payload.status,
        };
        return this.patientRepository.create(data);
    }
    async update(payload) {
        const { BleDevice, status, DriveStoragePath } = payload;
        const existing = await this.patientRepository.findOne({
            BleDevice: BleDevice,
        });
        if (existing) {
            if (existing.dataValues.DriveStoragePath &&
                existing.dataValues.status === 'Uploaded') {
                throw new common_1.ConflictException(`Patient study already completed with DriveStoragePath`);
            }
        }
        const updatedPatient = await this.patientRepository.updateByBleDevice(BleDevice, {
            status: status,
            DriveStoragePath: DriveStoragePath,
        });
        return updatedPatient;
    }
};
exports.PatientUseCase = PatientUseCase;
exports.PatientUseCase = PatientUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_repository_1.PatientRepository])
], PatientUseCase);
//# sourceMappingURL=patient.usecase.js.map