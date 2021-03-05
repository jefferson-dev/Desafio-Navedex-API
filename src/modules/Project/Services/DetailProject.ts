import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import AppError from '@shared/errors/AppError';

@injectable()
export default class DetailProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(id: string): Promise<Project | undefined> {
    const project = await this.projectRepository.findOneProjectId(id);

    if (!project) {
      throw new AppError('Project not exist.');
    }

    return project;
  }
}
