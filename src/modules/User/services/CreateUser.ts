import { injectable, inject } from 'tsyringe';
import bcrypt from 'bcrypt';

import IUserRepository from '@modules/User/repositories/IUserRepository';
import User from '@modules/User/infra/typeorm/entities/Users';

import AppError from '@shared/errors/AppError';

interface Request {
  email: string;
  password: string;
}

@injectable()
export class CreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ email, password }: Request): Promise<User> {
    const emailExist = await this.userRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError('Email already exist.');
    }

    const passEncrypt = await bcrypt.hash(password, 8);

    const user = this.userRepository.create({
      email,
      password: passEncrypt,
    });

    return user;
  }
}
