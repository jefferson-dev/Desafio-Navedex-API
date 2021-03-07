import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import AppError from '@shared/errors/AppError';

@injectable()
export class DetailProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(data: any): Promise<Project | undefined> {
    const project = await this.projectRepository.findOneProject(data);

    if (!project) {
      throw new AppError('Project not exist.');
    }

    return project;
  }
}
