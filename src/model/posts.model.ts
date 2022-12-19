import {
  Model,
  Column,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import Comments from './comments.model';
import Users from './users.model';

@Table({ underscored: true })
export default class Posts extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  postsId: number;

  @Column({ type: DataType.STRING(100) })
  title: string;

  @Column({ type: DataType.STRING(100) })
  image?: string;

  @BelongsTo(() => Users)
  user: Users;

  @ForeignKey(() => Users)
  @Column
  usersId: number;

  @HasMany(() => Comments, { foreignKey: 'postsId' })
  comments: Comments[];

  @Column
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;
}