import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';
import Users from 'src/model/users.model';
import AuthService from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export default class HttpStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<Users> {
    const user: Users = await this.authService.validate(username, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
