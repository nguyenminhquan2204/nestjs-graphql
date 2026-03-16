import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepo } from './user.repo';

@Module({
  providers: [UserService, UserResolver, UserRepo],
})
export class UserModule {}
