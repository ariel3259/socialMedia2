import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserJwt from 'src/dto/user.jwt';
import Users from 'src/model/users.model';
import UsersService from 'src/services/users.services';
import EncoderService from '../encoder.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly usersServices: UsersService,
    private readonly encoder: EncoderService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<Users> {
    const user: Users = await this.usersServices.findOne(email);
    if (!user) return null;
    const result: boolean = await this.encoder.verify(password, user.password);
    console.log(result)
    if (!result) return null;
    return user;
  }

  async login(user: Users): Promise<{ access_token: string }> {
    const payload: UserJwt = {
      sub: user.usersId,
      user: user.email,
      cellPhone: user.cellPhone,
    };
    const access_token = await this.jwtService.signAsync(payload)
    return { access_token };
  }
}