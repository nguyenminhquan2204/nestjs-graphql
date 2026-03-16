import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  findAll() {
    return this.userRepo.findAll();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }

  create(createUserInput: Prisma.UserCreateInput) {
    return this.userRepo.create(createUserInput);
  }

  update(id: number, updateUserInput: Prisma.UserUpdateInput) {
    return this.userRepo.update(id, updateUserInput);
  }

  remove(id: number) {
    return this.userRepo.remove(id);
  }
}
