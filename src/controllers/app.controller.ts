import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import Users from 'src/model/users.model';
import HttpGuard from 'src/utils/guards/http.guard';
import AuthService from 'src/utils/strategies/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(HttpGuard)
  @Post('login')
  async login(@Req() req): Promise<{ access_token: string }>{
    console.log(req.url)
    return await this.authService.login(req.user as Users);
  }

  @Get()
  hiWord(): string {
    return 'Hi word';
  }
}
