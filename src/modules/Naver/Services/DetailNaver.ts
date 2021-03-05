import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';
import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

@injectable()
export default class DetailProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute(data: any): Promise<Naver | undefined> {
    const naver = this.naverRepository.findOneNaver(data);

    return naver;
  }
}
