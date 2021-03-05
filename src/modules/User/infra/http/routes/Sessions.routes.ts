import { Router } from 'express';

import SessionController from '@modules/User/infra/http/controllers/SessionController';

const sessionsRouter = Router();
const sessionController = new SessionController();

sessionsRouter.post('/', sessionController.store);

export default sessionsRouter;
