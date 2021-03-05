import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import AppError from '@shared/errors/AppError';

interface Request {
  id: string;
  name: string;
  user_id: string;
}

@injectable()
export default class UpdateProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({ id, name, user_id }: Request): Promise<Project> {
    const project = await this.projectRepository.findOneProjectId(id);

    if (!project) {
      throw new AppError('Project not found');
    }

    project.name = name;
    project.user_id = user_id;

    return this.projectRepository.update(project);
  }
}
