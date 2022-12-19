import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import UserResponseDto from 'src/dto/user.response.dto';
import UsersDto from 'src/dto/users.dto';
import UsersService from 'src/services/users.services';

@Controller('api/users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() usersDto: UsersDto): Promise<UserResponseDto> {
    return await this.usersService.create(usersDto);
  }
}