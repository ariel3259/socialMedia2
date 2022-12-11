import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import Comments from './comments.model';
import Posts from './posts.model';

@Table({ modelName: 'users' })
export default class Users extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  usersId: number;

  @Column({ type: DataType.STRING(50) })
  name: string;

  @Column({ type: DataType.STRING(50) })
  lastname: string;

  @Column({ type: DataType.STRING(150) })
  email: string;

  @Column
  password: string;

  @HasMany(() => Posts, { foreignKey: 'usersId' })
  posts: Posts[];

  @HasMany(() => Comments, { foreignKey: 'usersId' })
  comments: Comments[];

  @Column
  status: boolean;

  @Column
  createdAt: Date;

  @Column({ defaultValue: new Date() })
  updatedAt: Date;

}