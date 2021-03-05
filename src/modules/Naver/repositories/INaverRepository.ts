import Naver from '@modules/Naver/infra/typeorm/entities/Navers';

import { INaverDTO } from '@modules/Naver/dtos/INaverDTO';

export default interface IProjectRepository {
  findAllNaver(data: any): Promise<Naver[] | undefined>;
  findOneNaver(data: any): Promise<Naver | undefined>;
  create(data: INaverDTO): Promise<Naver>;
  update(data: INaverDTO): Promise<Naver>;
  delete(id: string): Promise<void>;
}
