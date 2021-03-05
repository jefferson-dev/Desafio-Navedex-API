import { Router } from 'express';

import usersRouter from '@modules/User/infra/http/routes/Users.routes';
import sessionsRouter from '@modules/User/infra/http/routes/Sessions.routes';
import naversRouter from '@modules/Naver/infra/http/routes/Navers.routes';
import projectsRouter from '@modules/Project/infra/http/routes/Projects.routes';
import isAuthenticated from '@modules/User/infra/http/middlewares/isAuthenticated';

const appRouter = Router();

appRouter.use('/users', usersRouter);
appRouter.use('/sessions', sessionsRouter);

appRouter.use(isAuthenticated);
appRouter.use('/navers', naversRouter);
appRouter.use('/projects', projectsRouter);

export default appRouter;
