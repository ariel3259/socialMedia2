import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { models } from 'src/model/model.module';

export default function databaseConfig(): SequelizeModuleOptions {
  return {
    dialect: 'postgres',
    host: process.env.HOST,
    port: parseInt(process.env.PORT_DB),
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    schema: process.env.SCHEMA,
    models,
    synchronize: false,
  };
}