import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export default class UsersDto {
  usersId?: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsNumber()
  cellPhone: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}