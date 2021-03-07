import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindNaver from '@modules/Naver/services/FindNaver';
import DetailNaver from '@modules/Naver/services/DetailNaver';
import CreateNaver from '@modules/Naver/services/CreateNaver';
import UpdateNaver from '@modules/Naver/services/UpdateNaver';
import DeleteNaver from '@modules/Naver/services/DeleteNaver';

export default class NaverController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = { ...request.query, user_id: request.user.id };

    const findNaver = container.resolve(FindNaver);

    const project = await findNaver.execute(data);

    return response.json(project);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const data = {
      where: { id },
      relations: ['projects'],
    };

    const detailNaver = container.resolve(DetailNaver);
    const navers = await detailNaver.execute(data);

    return response.json(navers);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const {
      name,
      birthdate,
      admission_date,
      job_role,
      projects,
    } = request.body;

    const user_id = request.user.id;

    const createNaver = container.resolve(CreateNaver);

    const navers = await createNaver.execute({
      user_id,
      name,
      birthdate,
      admission_date,
      job_role,
      projects,
    });

    return response.json(navers);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const {
      name,
      birthdate,
      admission_date,
      job_role,
      projects,
    } = request.body;

    const updateNaver = container.resolve(UpdateNaver);

    const navers = await updateNaver.execute({
      id,
      name,
      birthdate,
      admission_date,
      job_role,
      user_id,
      projects,
    });

    return response.json(navers);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const deleteNaver = container.resolve(DeleteNaver);

    await deleteNaver.execute({ id, user_id });

    return response.json({
      message: `Project deletado com sucesso.`,
    });
  }
}
