import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return this.userService.findAll();
  }
}
