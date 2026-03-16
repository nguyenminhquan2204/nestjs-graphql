import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostRepo } from './post.repo';

@Module({
  providers: [PostResolver, PostService, PostRepo],
})
export class PostModule {}
