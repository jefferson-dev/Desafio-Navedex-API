import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

import AppError from '@shared/errors/AppError';

@injectable()
export default class DetailProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute(data: any): Promise<Naver | undefined> {
    const naver = await this.naverRepository.findOneNaver(data);

    if (!naver) {
      throw new AppError('Nave not exist.');
    }

    return naver;
  }
}
