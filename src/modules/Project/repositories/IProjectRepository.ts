import Project from '@modules/Project/infra/typeorm/entities/Projects';

import { IProjectDTO, IFindProject } from '@modules/Project/dtos/IProjectDTO';

export default interface IProjectRepository {
  findAllProject(data: any): Promise<Project[] | undefined>;
  findOneProject(data: any): Promise<Project | undefined>;
  findProject(data: IFindProject): Promise<Project | undefined>;
  create(data: IProjectDTO): Promise<Project>;
  update(data: IProjectDTO): Promise<Project>;
  delete(id: string): Promise<void>;
}
