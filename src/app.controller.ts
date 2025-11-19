import { Controller, Get } from '@nestjs/common';
import { ResponseHandler } from 'src/common/utils/response-handler';
@Controller('')
export class AppController {
    @Get()
    async rootCheck(){
         return ResponseHandler.success(null, ' server running ');
    }

}
