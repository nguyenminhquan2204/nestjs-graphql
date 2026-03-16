import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreatePostInput, Post, UpdatePostInput } from './post.dto';

@Injectable()
export class PostRepo {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  findOne(id: number): Promise<Post> {
    return this.prisma.post.findUniqueOrThrow({
      where: { id },
      include: { author: true },
    });
  }

  create(data: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data,
      include: { author: true },
    });
  }

  update(id: number, data: UpdatePostInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
      include: { author: true },
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
      include: { author: true },
    });
  }
}
