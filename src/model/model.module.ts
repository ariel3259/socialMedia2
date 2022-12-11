import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Comments from './comments.model';
import Posts from './posts.model';
import Users from './users.model';

export const models = [Users, Posts, Comments];

@Module({
  imports: [SequelizeModule.forFeature(models)],
  exports: [SequelizeModule.forFeature(models)],
})
export class ModelModule {}
