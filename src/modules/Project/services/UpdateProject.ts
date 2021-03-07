import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

import AppError from '@shared/errors/AppError';

interface Request {
  id: string;
  name: string;
  user_id: string;
  navers: any;
}

@injectable()
export class UpdateProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute({
    id,
    name,
    user_id,
    navers,
  }: Request): Promise<Project> {
    const project = await this.projectRepository.findProject({
      where: { id },
    });

    if (!project?.name) {
      throw new AppError('Project not found');
    }

    if (project?.user_id !== user_id) {
      throw new AppError('This Project does not belong to you');
    }

    project.name = name;
    project.user_id = user_id;
    project.navers = navers;

    return this.projectRepository.update(project);
  }
}
