import { Module } from '@nestjs/common';
import { ModelModule } from 'src/model/model.module';

@Module({
  imports: [ModelModule],
})
export class ServicesModule {}
