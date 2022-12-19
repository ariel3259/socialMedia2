import { Module } from '@nestjs/common';
import { ModelModule } from './model/model.module';
import { UtilsModule } from './utils/utils.module';
import { ServicesModule } from './services/services.module';
import { ControllersModule } from './controllers/controllers.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { models } from './model/model.module';
import { StrategiesModule } from './utils/strategies/strategies.module';
import JwtGuard from './utils/guards/jwt.guard';
import { APP_GUARD } from '@nestjs/core/constants';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT_DB),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      schema: process.env.SCHEMA,
      models,
      synchronize: false,
    }),
    ModelModule,
    UtilsModule,
    ServicesModule,
    StrategiesModule,
    ControllersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    }]
})
export class AppModule {}
