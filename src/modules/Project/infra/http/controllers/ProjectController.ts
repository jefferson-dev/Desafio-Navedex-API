import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindProject from '@modules/Project/Services/FindProject';
import DetailProject from '@modules/Project/Services/DetailProject';
import CreateProject from '@modules/Project/Services/CreateProject';
import UpdateProject from '@modules/Project/Services/UpdateProject';
import DeleteProject from '@modules/Project/Services/DeleteProject';

export default class ProjectController {
  public async index(request: Request, response: Response): Promise<Response> {
    const data = { ...request.query, user_id: request.user.id };

    const findProjects = container.resolve(FindProject);

    const project = await findProjects.execute(data);

    return response.json(project);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneProjects = container.resolve(DetailProject);

    const project = await findOneProjects.execute(id);

    return response.json(project);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const projectCreate = container.resolve(CreateProject);

    const user_id = request.user.id;

    const project = await projectCreate.execute({ name, user_id });

    return response.json(project);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const user_id = request.user.id;

    const findProjects = container.resolve(UpdateProject);

    const project = await findProjects.execute({ id, name, user_id });

    return response.json(project);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProjects = container.resolve(DeleteProject);

    await findProjects.execute(id);

    return response.json({
      message: `Projeto deletado com sucesso.`,
    });
  }
}
