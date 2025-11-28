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
const device_repository_1 = require("../repositories/device.repository");
let PatientUseCase = class PatientUseCase {
    patientRepository;
    deviceRepository;
    constructor(patientRepository, deviceRepository) {
        this.patientRepository = patientRepository;
        this.deviceRepository = deviceRepository;
    }
    async listexecute(payload) {
        return await this.patientRepository.findOne({
            BleDevice: payload.BleDevice,
        });
    }
    async execute(payload) {
        let device = await this.deviceRepository.findByBleDevice(payload.BleDevice);
        if (!device) {
            device = await this.deviceRepository.create({
                bleDevice: payload.BleDevice,
                isAssigned: false,
                assignedPatientId: null,
            });
        }
        if (device.dataValues.isAssigned) {
            throw new common_1.ConflictException(`Device ${payload.BleDevice} is already assigned to another patient.`);
        }
        const patient = await this.patientRepository.create({
            BleDevice: payload.BleDevice,
            ...payload.patientInfo,
            ...payload.studyInfo,
            ...payload.stateInfo,
            status: payload.status,
            deviceId: device.id,
        });
        await this.deviceRepository.assignDevice(device.id, patient.id);
        return patient;
    }
    async update(payload) {
        const patient = await this.patientRepository.findOne({
            BleDevice: payload.BleDevice,
        });
        if (!patient)
            throw new common_1.NotFoundException('Patient not found');
        if (payload.status === 'Uploaded') {
            await this.deviceRepository.releaseDevice(patient.dataValues.deviceId);
        }
        return this.patientRepository.updateByBleDevice(payload.BleDevice, {
            status: payload.status,
            DriveStoragePath: payload.DriveStoragePath,
        });
    }
    async addDevices(devices) {
        const bleList = devices.map(d => d.bleDevice);
        const existing = await this.deviceRepository.findExistingDevices(bleList);
        const existingSet = new Set(existing.map(e => e.bleDevice));
        const toCreate = devices.filter(d => !existingSet.has(d.bleDevice));
        const alreadyExists = devices.filter(d => existingSet.has(d.bleDevice));
        const created = (await Promise.allSettled(toCreate.map(d => this.deviceRepository.create({
            bleDevice: d.bleDevice,
            isAssigned: false,
            assignedPatientId: null,
        }))))
            .filter(r => r.status === 'fulfilled')
            .map((r) => r.value);
        if (alreadyExists.length) {
            throw new common_1.ConflictException({
                message: 'Some devices already exist',
                existingDevices: alreadyExists.map(d => d.bleDevice),
                createdDevices: created.map(c => c.bleDevice),
                createdCount: created.length,
            });
        }
        return {
            createdDevices: created.map(c => c.dataValues.bleDevice),
            createdCount: created.length,
        };
    }
    async terminate(query) {
        const { BleDevice, patientId } = query;
        const patient = await this.patientRepository.findOne({ BleDevice });
        if (!patient) {
            throw new common_1.NotFoundException('Patient not found');
        }
        const deviceId = patient.dataValues.deviceId;
        const device = await this.deviceRepository.findByBleDevice(BleDevice);
        if (!device) {
            throw new common_1.NotFoundException('Device not found for this patient');
        }
        await this.patientRepository.updateByBleDevice(BleDevice, {
            status: 'Terminated'
        }, patientId);
        await this.deviceRepository.update(deviceId, {
            assignedPatientId: null,
            isAssigned: false,
        });
        return {
            message: 'Patient study terminated successfully',
        };
    }
};
exports.PatientUseCase = PatientUseCase;
exports.PatientUseCase = PatientUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_repository_1.PatientRepository,
        device_repository_1.DeviceRepository])
], PatientUseCase);
//# sourceMappingURL=patient.usecase.js.map