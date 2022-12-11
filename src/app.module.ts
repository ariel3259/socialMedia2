import { Module } from '@nestjs/common';
import { ModelModule } from './model/model.module';
import { UtilsModule } from './utils/utils.module';
import { ServicesModule } from './services/services.module';
import { ControllersModule } from './controllers/controllers.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import databaseConfig from './configs/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot(databaseConfig()),
    ModelModule,
    UtilsModule,
    ServicesModule,
    ControllersModule,
  ],
})
export class AppModule {}
