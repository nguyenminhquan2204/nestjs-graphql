import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class UserRepo {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: { posts: true },
    });
  }

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
      include: { posts: true },
    });
  }

  update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
      include: { posts: true },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
      include: { posts: true },
    });
  }
}
