import { injectable, inject } from 'tsyringe';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

@injectable()
export default class DeleteProject {
  constructor(
    @inject('ProjectRepository')
    private projectRepository: IProjectRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const project = this.projectRepository.delete(id);
  }
}
