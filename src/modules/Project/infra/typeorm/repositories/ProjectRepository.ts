import { getRepository, Repository } from 'typeorm';

import IProjectRepository from '@modules/Project/repositories/IProjectRepository';

import { IProjectDTO, IFindProject } from '@modules/Project/dtos/IProjectDTO';

import Project from '@modules/Project/infra/typeorm/entities/Projects';

export default class ProjectRepository implements IProjectRepository {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  public async findAllProject(data: any): Promise<Project[] | undefined> {
    const allProject = this.ormRepository.find(data);

    return allProject;
  }

  public async findOneProject(data: any): Promise<Project | undefined> {
    const oneProject = this.ormRepository.findOne(data);

    return oneProject;
  }

  public async findProject(data: IFindProject): Promise<Project | undefined> {
    const oneProject = this.ormRepository.findOne(data);

    return oneProject;
  }

  public async create({
    name,
    navers,
    user_id,
  }: IProjectDTO): Promise<Project> {
    const project = this.ormRepository.create({ name, navers, user_id });

    await this.ormRepository.save(project);

    return project;
  }

  public async update(project: IProjectDTO): Promise<Project> {
    return this.ormRepository.save(project);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}
