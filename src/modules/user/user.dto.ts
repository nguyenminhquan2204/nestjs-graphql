import {
  Field,
  InputType,
  Int,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { BasePost } from '../post/post.dto';

@ObjectType()
export class BaseUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  // @Field()
  password: string;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class User extends BaseUser {
  @Field(() => [BasePost])
  posts: BasePost[];
}

@InputType()
export class CreateUserInput extends PickType(
  BaseUser,
  ['name', 'email'],
  InputType,
) {
  @Field()
  password: string;
}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
