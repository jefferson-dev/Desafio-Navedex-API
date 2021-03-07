import { injectable, inject } from 'tsyringe';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authJWT from '@config/jwtConfig';

import IUserRepository from '@modules/User/repositories/IUserRepository';
import User from '@modules/User/infra/typeorm/entities/Users';

import AppError from '@shared/errors/AppError';

interface Request {
  email: string;
  password: string;
}

@injectable()
export class CreateSession {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    password,
  }: Request): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email/Password Invalid.');
    }

    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      throw new AppError('Email/Password Invalid.');
    }

    const token = jwt.sign({}, authJWT.jwt.secret, {
      subject: user.id,
      expiresIn: authJWT.jwt.expiresIn,
    });

    return { user, token };
  }
}
