import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/User/repositories/IUserRepository';
import IUserDTO from '@modules/User/dtos/IUserDTO';

import User from '@modules/User/infra/typeorm/entities/Users';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }

  public async create({ email, password }: IUserDTO): Promise<User> {
    const user = this.ormRepository.create({ email, password });

    await this.ormRepository.save(user);

    return user;
  }
}
