import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';
import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

import { INaverDTO } from '@modules/Naver/dtos/INaverDTO';

@injectable()
export default class CreateProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute({
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: INaverDTO): Promise<Naver> {
    const naver = this.naverRepository.create({
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
      projects,
    });

    return naver;
  }
}
