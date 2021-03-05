import { container } from 'tsyringe';

import IUserRepository from '@modules/User/repositories/IUserRepository';
import UserRepository from '@modules/User/infra/typeorm/repositories/UserRepository';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';
import ProjectRepository from '@modules/Project/infra/typeorm/repositories/ProjectRepository';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';
import NaverRepository from '@modules/Naver/infra/typeorm/repositories/NaverRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IProjectRepository>(
  'ProjectRepository',
  ProjectRepository,
);

container.registerSingleton<INaverRepository>(
  'NaverRepository',
  NaverRepository,
);
