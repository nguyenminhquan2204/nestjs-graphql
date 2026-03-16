import { Injectable } from '@nestjs/common';
import { CreatePostInput, UpdatePostInput } from './post.dto';
import { PostRepo } from './post.repo';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepo) {}
  create(createPostInput: CreatePostInput) {
    return this.postRepo.create(createPostInput);
  }

  findAll() {
    return this.postRepo.findAll();
  }

  findOne(id: number) {
    return this.postRepo.findOne(id);
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.postRepo.update(id, updatePostInput);
  }

  remove(id: number) {
    return this.postRepo.remove(id);
  }
}
