import { IsNotEmpty, IsString, IsEmail, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PatientInfoDto {
  @IsString() @IsNotEmpty() firstName: string;
  @IsString() @IsNotEmpty() lastName: string;
  @IsString() @IsNotEmpty() mobile: string;
  @IsString() @IsNotEmpty() gender: string;
  @IsEmail()  @IsNotEmpty() email: string;
  @IsString() @IsNotEmpty() dob: string;
}

export class StudyInfoDto {
  @IsString() @IsNotEmpty() studyType: string;
  @IsString() @IsNotEmpty() studyDuration: string;
  @IsString() @IsNotEmpty() orientation: string;
}

export class StateInfoDto {
  @IsString() @IsNotEmpty() createdDate: string;
  @IsString() @IsNotEmpty() time: string;
  @IsString() @IsNotEmpty() duration: string;
  @IsObject() @IsNotEmpty() parameters: Record<string, any>;
}

export class CreateStudyDto {
  @IsString() @IsNotEmpty() bleDevice: string;

  @ValidateNested() @Type(() => PatientInfoDto)
  patientInfo: PatientInfoDto;

  @ValidateNested() @Type(() => StudyInfoDto)
  studyInfo: StudyInfoDto;

  @ValidateNested() @Type(() => StateInfoDto)
  stateInfo: StateInfoDto;

  @IsString() @IsNotEmpty() status: string;
}

export class UpdateStudyDto {
  @IsString() @IsNotEmpty() bleDevice: string;
  @IsString() @IsNotEmpty() status: string;
  @IsString() @IsNotEmpty() driveStoragePath: string;
}

export class ListStudyDto {
  @IsString() @IsNotEmpty() bleDevice: string;
}
