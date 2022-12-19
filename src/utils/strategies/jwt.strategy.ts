import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import UserJwt from 'src/dto/user.jwt';
import UserJwtResponse from 'src/dto/user.jwt.response';

export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(){
    super({
      secretOrKey: `${process.env.SECRET}`,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }

  validate(payload: UserJwt): UserJwtResponse {
    return {
      usersId: payload.sub,
      user: payload.user,
      cellPhone: payload.cellPhone,
    };
  }
}