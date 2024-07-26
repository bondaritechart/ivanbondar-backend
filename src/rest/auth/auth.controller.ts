import { Controller, Post } from '@nestjs/common';
import { Public } from 'src/graphql/auth/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  @Public()
  @Post('login')
  getHello(): string {
    return 'Hello World!';
  }
}
