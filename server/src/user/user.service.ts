import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Db, ObjectId } from 'mongodb';
import { Request, Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  createUser = async (
    req: Request,
    res: Response,
    body: CreateUserDto,
  ): Promise<void | Response> => {
    try {
      let userData: any = await this.db.collection('users').insertOne(body);
      return res.status(200).json({
        success: true,
        data: userData,
      });
    } catch (error) {
      console.log('create-user-catch-block', error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
