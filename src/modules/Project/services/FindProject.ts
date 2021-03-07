import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

@injectable()
export class FindProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(data: any): Promise<Project[] | undefined> {
    const project = await this.projectRepository.findAllProject(data);

    return project;
  }
}
