import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ServicesModule } from 'src/services/services.module';
import { UtilsModule } from '../utils.module';
import AuthService from './auth.service';
import HttpStrategy from './http.strategy';
import JwtStrategy from './jwt.strategy';

const strategies = [AuthService, HttpStrategy, JwtStrategy];
 
@Module({
  imports: [
    PassportModule,
    ServicesModule,
    UtilsModule,
    JwtModule.register({
      secret: `${process.env.SECRET}`,
  })
  ],
  providers: strategies,
  exports: strategies,
})
export class StrategiesModule {}
