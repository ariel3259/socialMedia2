import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Posts from './posts.model';
import Users from './users.model';

@Table({ underscored: true })
export default class Comments extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  commentsId: number;

  @Column
  description: string;

  @BelongsTo(() => Users)
  user: Users;

  @ForeignKey(() => Users)
  usersId: Users;

  @BelongsTo(() => Posts)
  post: Posts;

  @ForeignKey(() => Posts)
  postsId: number;

  @Column
  status: boolean;

  @Column
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;
}