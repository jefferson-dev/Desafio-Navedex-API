import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSession from '@modules/User/services/CreateSession';

export default class SessionController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(CreateSession);

    const user = await createUser.execute({ email, password });

    return response.json(user);
  }
}
