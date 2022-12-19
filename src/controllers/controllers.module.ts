import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { StrategiesModule } from 'src/utils/strategies/strategies.module';
import { AppController } from './app.controller';
import UsersController from './users.controller';

@Module({
  imports: [ServicesModule, StrategiesModule],
  controllers: [AppController, UsersController],
})
export class ControllersModule {}
