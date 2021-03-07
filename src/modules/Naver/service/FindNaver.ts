import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

@injectable()
export default class FindProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute(data: any): Promise<Naver[] | undefined> {
    const naver = await this.naverRepository.findAllNaver(data);

    return naver;
  }
}
