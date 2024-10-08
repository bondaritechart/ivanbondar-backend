import { Controller, Get } from '@nestjs/common';
import { Public } from './graphql/auth/decorators/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  getHello(): string {
    return 'hello';
  }
}
