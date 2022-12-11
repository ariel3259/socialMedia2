import { Module } from '@nestjs/common';
import { StrategiesModule } from './strategies/strategies.module';

@Module({
  imports: [StrategiesModule]
})
export class UtilsModule {}
