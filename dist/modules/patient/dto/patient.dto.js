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
exports.ListStudyDto = exports.UpdateStudyDto = exports.CreateStudyDto = exports.StateInfoDto = exports.StudyInfoDto = exports.PatientInfoDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class PatientInfoDto {
    firstName;
    lastName;
    mobile;
    gender;
    email;
    dob;
}
exports.PatientInfoDto = PatientInfoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PatientInfoDto.prototype, "dob", void 0);
class StudyInfoDto {
    StudyType;
    studyDuration;
    orientation;
}
exports.StudyInfoDto = StudyInfoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudyInfoDto.prototype, "StudyType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudyInfoDto.prototype, "studyDuration", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StudyInfoDto.prototype, "orientation", void 0);
class StateInfoDto {
    CreatedDate;
    time;
    duration;
}
exports.StateInfoDto = StateInfoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StateInfoDto.prototype, "CreatedDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StateInfoDto.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StateInfoDto.prototype, "duration", void 0);
class CreateStudyDto {
    BleDevice;
    patientInfo;
    studyInfo;
    stateInfo;
    status;
}
exports.CreateStudyDto = CreateStudyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudyDto.prototype, "BleDevice", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PatientInfoDto),
    __metadata("design:type", PatientInfoDto)
], CreateStudyDto.prototype, "patientInfo", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => StudyInfoDto),
    __metadata("design:type", StudyInfoDto)
], CreateStudyDto.prototype, "studyInfo", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => StateInfoDto),
    __metadata("design:type", StateInfoDto)
], CreateStudyDto.prototype, "stateInfo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStudyDto.prototype, "status", void 0);
class UpdateStudyDto {
    BleDevice;
    status;
    DriveStoragePath;
}
exports.UpdateStudyDto = UpdateStudyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStudyDto.prototype, "BleDevice", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStudyDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateStudyDto.prototype, "DriveStoragePath", void 0);
class ListStudyDto {
    BleDevice;
}
exports.ListStudyDto = ListStudyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListStudyDto.prototype, "BleDevice", void 0);
//# sourceMappingURL=patient.dto.js.map