import { Module } from '@nestjs/common';
import { ModelModule } from 'src/model/model.module';
import { UtilsModule } from 'src/utils/utils.module';
import UsersService from './users.services';
const services = [UsersService];

@Module({
  imports: [ModelModule, UtilsModule],
  providers: services,
  exports: services,
})
export class ServicesModule {}
