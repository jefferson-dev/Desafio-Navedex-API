import { getRepository, Repository } from 'typeorm';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

import { INaverDTO, IFindNaver } from '@modules/Naver/dtos/INaverDTO';

import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

export default class ProjectRepository implements INaverRepository {
  private ormRepository: Repository<Naver>;

  constructor() {
    this.ormRepository = getRepository(Naver);
  }

  public async findAllNaver(data: any): Promise<Naver[] | undefined> {
    const allNaver = this.ormRepository.find(data);

    return allNaver;
  }

  public async findOneNaver(data: any): Promise<Naver | undefined> {
    const oneNaver = this.ormRepository.findOne(data);

    return oneNaver;
  }

  public async findNaver(data: IFindNaver): Promise<Naver | undefined> {
    const naver = this.ormRepository.findOne(data);

    return naver;
  }

  public async create({
    name,
    birthdate,
    admission_date,
    job_role,
    projects,
    user_id,
  }: INaverDTO): Promise<Naver> {
    const naver = this.ormRepository.create({
      name,
      birthdate,
      admission_date,
      job_role,
      projects,
      user_id,
    });

    await this.ormRepository.save(naver);

    return naver;
  }

  public async update(naver: INaverDTO): Promise<Naver> {
    return this.ormRepository.save(naver);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
