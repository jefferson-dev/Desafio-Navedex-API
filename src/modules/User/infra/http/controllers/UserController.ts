import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUser from '@modules/User/service/CreateUser';

export default class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(CreateUser);

    const user = await createUser.execute({ email, password });

    return response.json(user);
  }
}
