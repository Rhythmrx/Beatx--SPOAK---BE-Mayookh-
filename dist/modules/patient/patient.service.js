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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const patient_usecase_1 = require("./usecases/patient.usecase");
let PatientService = class PatientService {
    patientUseCase;
    constructor(patientUseCase) {
        this.patientUseCase = patientUseCase;
    }
    async add(payload) {
        return await this.patientUseCase.execute(payload);
    }
    async addDevice(payload) {
        return await this.patientUseCase.addDevices(payload.devices);
    }
    async list(payload) {
        return await this.patientUseCase.listexecute(payload);
    }
    async update(payload) {
        return await this.patientUseCase.update(payload);
    }
    async terminate(query) {
        return await this.patientUseCase.terminate(query);
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_usecase_1.PatientUseCase])
], PatientService);
//# sourceMappingURL=patient.service.js.map