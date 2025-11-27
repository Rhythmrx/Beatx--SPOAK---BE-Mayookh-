import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { PatientService } from './patient.service';
import { ResponseHandler } from 'src/common/utils/response-handler';
import {AddDeviceBatchDto,CreateStudyDto,ListStudyDto,UpdateStudyDto} from './dto/patient.dto';
@Controller('patient-management/v1')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  @Post('patient')
  async addPatient(@Body() payload: CreateStudyDto) {
    const data = await this.patientService.add(payload);
    return ResponseHandler.success(data, 'Patient created successfully');
  }
  @Post('device')
  async addDevice(@Body() payload: AddDeviceBatchDto) {
    const data = await this.patientService.addDevice(payload);
    return ResponseHandler.success(data, 'Devices processed successfully');
  }
  @Get('patient')
  async listPatient(@Body() payload: ListStudyDto) {
    const data = await this.patientService.list(payload);
    return ResponseHandler.success(data, 'Patient listed successfully');
  }
  @Patch('patient')
  async updatePatient(@Body() payload: UpdateStudyDto) {
    const data = await this.patientService.update(payload);
    return ResponseHandler.success(data, 'Patient study updated successfully');
  }
  @Patch('terminate-info')
  async terminatePatient(@Query() query:any){
    const data=await this.patientService.terminate(query)
    return ResponseHandler.success(data, 'Patient study terminated  successfully');
  }
}
