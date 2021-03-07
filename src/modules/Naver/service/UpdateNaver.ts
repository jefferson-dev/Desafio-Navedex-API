import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

import AppError from '@shared/errors/AppError';

interface Request {
  id: string;
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects: any;
}

@injectable()
export default class UpdateProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute({
    id,
    name,
    birthdate,
    admission_date,
    job_role,
    user_id,
    projects,
  }: Request): Promise<Naver> {
    const naver = await this.naverRepository.findNaver({
      where: { id },
    });

    if (!naver?.name) {
      throw new AppError('Nave not found');
    }

    if (naver?.user_id !== user_id) {
      throw new AppError('This nave does not belong to you');
    }

    naver.name = name;
    naver.birthdate = birthdate;
    naver.admission_date = admission_date;
    naver.job_role = job_role;
    naver.user_id = user_id;
    naver.projects = projects;

    return this.naverRepository.update(naver);
  }
}
