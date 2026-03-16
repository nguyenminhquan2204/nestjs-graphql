import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.email(),
  password: z.string().min(6).max(100),
  createdAt: z.date(),
});

export const CreateUserBodySchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
});

export const UpdateUserBodySchema = CreateUserBodySchema.partial();
