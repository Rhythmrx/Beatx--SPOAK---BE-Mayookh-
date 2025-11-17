import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PatientService } from './patient.service';
import { ResponseHandler } from 'src/common/utils/response-handler';
import {
  CreateStudyDto,
  ListStudyDto,
  UpdateStudyDto,
} from './dto/patient.dto';

@Controller('beatx-spoke/v1/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async addPatient(@Body() payload: CreateStudyDto) {
    const data = await this.patientService.add(payload);
    return ResponseHandler.success(data, 'Patient created successfully');
  }
  @Get()
  async listPatient(@Body() payload: ListStudyDto) {
    const data = await this.patientService.list(payload);
    return ResponseHandler.success(data, 'Patient listed successfully');
  }
  @Patch()
  async updatePatient(@Body() payload: UpdateStudyDto) {
    const data = await this.patientService.update(payload);
    return ResponseHandler.success(data, 'Patient study updated successfully');
  }
}
