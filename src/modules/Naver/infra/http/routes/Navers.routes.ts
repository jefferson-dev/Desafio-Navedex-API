import { Router } from 'express';

import NaverController from '@modules/Naver/infra/http/controllers/NaverController';

const naversRouter = Router();
const naverController = new NaverController();

naversRouter.get('/', naverController.index);

naversRouter.get('/:id', naverController.show);

naversRouter.post('/', naverController.store);

naversRouter.put('/:id', naverController.update);

naversRouter.delete('/:id', naverController.delete);

export default naversRouter;
