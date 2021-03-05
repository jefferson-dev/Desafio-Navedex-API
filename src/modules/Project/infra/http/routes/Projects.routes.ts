import { Router } from 'express';

import ProjectController from '@modules/Project/infra/http/controllers/ProjectController';

const projectRouter = Router();
const projectController = new ProjectController();

projectRouter.get('/', projectController.index);

projectRouter.get('/:id', projectController.show);

projectRouter.post('/', projectController.store);

projectRouter.put('/:id', projectController.update);

projectRouter.delete('/:id', projectController.delete);

export default projectRouter;
