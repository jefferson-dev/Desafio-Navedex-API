import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import { IProjectDTO } from '@modules/Project/dtos/IProjectDTO';

import AppError from '@shared/errors/AppError';

@injectable()
export default class CreateProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({
    name,
    user_id,
    navers,
  }: IProjectDTO): Promise<Project> {
    const projectExist = await this.projectRepository.findProject({
      where: { name, user_id },
    });

    if (projectExist) {
      throw new AppError('Project already exist.');
    }

    const project = await this.projectRepository.create({
      name,
      user_id,
      navers,
    });

    return project;
  }
}
