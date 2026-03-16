import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Nguyen A',
      email: 'a@gmail.com',
      password: 'Abc@123',
      createdAt: new Date().toISOString(),
    },
  ];
  findAll() {
    return Promise.resolve(this.users);
  }
}
