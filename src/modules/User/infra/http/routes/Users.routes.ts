import { Router } from 'express';

import UserController from '@modules/User/infra/http/controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.store);

export default userRouter;
