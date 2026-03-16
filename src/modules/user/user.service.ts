import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepo } from './user.repo';
import { Prisma } from 'generated/prisma/client';
import {
  isNotFoundPrismaError,
  isUniqueConstraintPrismaError,
} from 'src/shared/helpers';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async findAll() {
    return await this.userRepo.findAll();
  }

  async findOne(id: number) {
    try {
      return await this.userRepo.findOne(id);
    } catch (error) {
      if (isNotFoundPrismaError(error)) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      throw error;
    }
  }

  async create(createUserInput: Prisma.UserCreateInput) {
    try {
      return await this.userRepo.create(createUserInput);
    } catch (error) {
      if (isUniqueConstraintPrismaError(error)) {
        throw new ConflictException(
          `User with email ${createUserInput.email} already exists`,
        );
      }
      throw error;
    }
  }

  async update(id: number, updateUserInput: Prisma.UserUpdateInput) {
    try {
      return await this.userRepo.update(id, updateUserInput);
    } catch (error) {
      if (isUniqueConstraintPrismaError(error)) {
        throw new ConflictException(`User with email already exists`);
      }
      if (isNotFoundPrismaError(error)) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    return await this.userRepo.remove(id);
  }
}
