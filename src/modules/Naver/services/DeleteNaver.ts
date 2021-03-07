import { injectable, inject } from 'tsyringe';

import INaverRepository from '@modules/Naver/repositories/INaverRepository';

import AppError from '@shared/errors/AppError';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
export class DeleteNaver {
  constructor(
    @inject('NaverRepository')
    private naverRepository: INaverRepository,
  ) {}

  public async execute({ id, user_id }: Request): Promise<void> {
    const project = await this.naverRepository.findOneNaver({
      where: { id },
    });

    if (!project) {
      throw new AppError('Nave not found.');
    }

    if (project.user_id !== user_id) {
      throw new AppError('This nave does not belong to you.');
    }

    await this.naverRepository.delete(id);
  }
}
