import {
  ObjectType,
  Field,
  Int,
  InputType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { BaseUser } from '../user/user.dto';

@ObjectType()
export class BasePost {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class Post extends BasePost {
  @Field(() => BaseUser)
  author: BaseUser;
}

@InputType()
export class CreatePostInput extends PickType(
  BasePost,
  ['title', 'content', 'authorId'],
  InputType,
) {}

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {}
