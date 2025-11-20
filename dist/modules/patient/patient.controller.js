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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const response_handler_1 = require("../../common/utils/response-handler");
const patient_dto_1 = require("./dto/patient.dto");
let PatientController = class PatientController {
    patientService;
    constructor(patientService) {
        this.patientService = patientService;
    }
    async addPatient(payload) {
        const data = await this.patientService.add(payload);
        return response_handler_1.ResponseHandler.success(data, 'Patient created successfully');
    }
    async listPatient(payload) {
        const data = await this.patientService.list(payload);
        return response_handler_1.ResponseHandler.success(data, 'Patient listed successfully');
    }
    async updatePatient(payload) {
        const data = await this.patientService.update(payload);
        return response_handler_1.ResponseHandler.success(data, 'Patient study updated successfully');
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.CreateStudyDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "addPatient", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.ListStudyDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "listPatient", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.UpdateStudyDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatient", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patient-management/v1/patient'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
//# sourceMappingURL=patient.controller.js.map