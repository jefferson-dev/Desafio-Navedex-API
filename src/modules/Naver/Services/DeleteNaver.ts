import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

@injectable()
export default class DeleteProject {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.naverRepository.delete(id);
  }
}
