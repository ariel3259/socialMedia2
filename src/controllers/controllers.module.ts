import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { AppController } from './app.controller';

@Module({
  imports: [ServicesModule],
  controllers: [AppController],
})
export class ControllersModule {}
