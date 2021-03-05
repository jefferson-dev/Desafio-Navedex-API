import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import { IProjectDTO } from '@modules/Project/dtos/IProjectDTO';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import AppError from '@shared/errors/AppError';

@injectable()
export default class CreateProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({ name, user_id }: IProjectDTO): Promise<Project> {
    const projectExist = await this.projectRepository.findProject({
      where: { name },
    });

    if (projectExist) {
      throw new AppError('Project already exist.');
    }

    const project = await this.projectRepository.create({ name, user_id });

    return project;
  }
}
