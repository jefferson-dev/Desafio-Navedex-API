import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindProject from '@modules/Project/service/FindProject';
import DetailProject from '@modules/Project/service/DetailProject';
import CreateProject from '@modules/Project/service/CreateProject';
import UpdateProject from '@modules/Project/service/UpdateProject';
import DeleteProject from '@modules/Project/service/DeleteProject';

export default class ProjectController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = { ...request.query, user_id: request.user.id };

    const findProjects = container.resolve(FindProject);

    const project = await findProjects.execute(data);

    return response.json(project);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const data = {
      where: { id },
      relations: ['navers'],
    };

    const findOneProjects = container.resolve(DetailProject);

    const project = await findOneProjects.execute(data);

    return response.json(project);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, navers } = request.body;

    const projectCreate = container.resolve(CreateProject);

    const user_id = request.user.id;

    const project = await projectCreate.execute({ name, user_id, navers });

    return response.json(project);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, navers } = request.body;
    const user_id = request.user.id;

    const findProjects = container.resolve(UpdateProject);

    const project = await findProjects.execute({ id, name, user_id, navers });

    return response.json(project);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    const findProjects = container.resolve(DeleteProject);

    await findProjects.execute({ id, user_id });

    return response.json({
      message: `Projeto deletado com sucesso.`,
    });
  }
}
