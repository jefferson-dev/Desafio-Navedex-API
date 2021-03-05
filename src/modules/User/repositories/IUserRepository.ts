import User from '@modules/User/infra/typeorm/entities/Users';
import IUserDTO from '@modules/User/dtos/IUserDTO';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: IUserDTO): Promise<User>;
}
