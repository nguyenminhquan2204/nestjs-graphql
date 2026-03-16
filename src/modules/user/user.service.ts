import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from './user.dto';

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

  private nextId = 2;

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findOne(id: number): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return Promise.resolve(user);
  }

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = {
      ...createUserInput,
      id: this.nextId++,
      createdAt: new Date().toISOString(),
    };
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const updatedUser = { ...this.users[userIndex], ...updateUserInput };
    this.users[userIndex] = updatedUser;
    return Promise.resolve(updatedUser);
  }

  remove(id: number): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const removedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return Promise.resolve(removedUser);
  }
}
