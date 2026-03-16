import {
  Field,
  InputType,
  Int,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';

@ObjectType()
export class User {
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

@InputType()
export class CreateUserInput extends PickType(
  User,
  ['name', 'email'],
  InputType,
) {
  @Field()
  password: string;
}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
