import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import UserResponseDto from 'src/dto/user.response.dto';
import UsersDto from 'src/dto/users.dto';
import UsersUpdateDto from 'src/dto/users.update.dto';
import Comments from 'src/model/comments.model';
import Posts from 'src/model/posts.model';
import Users from 'src/model/users.model';
import EncoderService from 'src/utils/encoder.service';

@Injectable()
export default class UsersService {
  constructor(
    @InjectModel(Users) private readonly usersRepository: typeof Users,
    private readonly encoder: EncoderService,
  ){}

  async findOne(email: string): Promise<Users> {
    return await this.usersRepository.findOne({
      where: {
        email,
        status: true,
      },
    });
  }

  async findCommentsByUser(usersId: number): Promise<Comments[]> {
    const user: Users = await this.usersRepository.findOne({
      include: Comments,
      where: { 
        usersId,
        status: true,
      }
    });
    return user.comments;
  }

  async findPostsByUser(usersId: number): Promise<Posts[]> {
    const user: Users = await this.usersRepository.findOne({
      include: Posts,
      where: {
        usersId,
        status: true,
      },
    });
    return user.posts;
  }

  async create(userDto: UsersDto): Promise<UserResponseDto> {
    console.log(userDto);
    userDto.password = await this.encoder.encode(userDto.password);
    const userCreated = await this.usersRepository.create({
      ...userDto,
      createdAt: new Date(),
      status: true,
    });
    return {
      usersId: userCreated.usersId,
      name: userDto.name,
      lastname: userDto.lastname,
      email: userDto.email,
      cellPhone: userDto.cellPhone
    };
  }

  async update(
    userDtoUpdate: UsersUpdateDto,
    usersId: number
  ): Promise<UsersDto> {
    if (userDtoUpdate.password)
      userDtoUpdate.password = await this.encoder.encode(
        userDtoUpdate.password,
      );
    this.usersRepository.update({
        ...userDtoUpdate,
      },{
        where: {
          usersId,
          status: true,
        }}
    );
    userDtoUpdate.usersId = usersId;
    return userDtoUpdate as UsersDto;
  }
}