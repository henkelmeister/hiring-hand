import { Router } from 'express';
import { apiController } from '../controllers';

const apiRouter = () => {
  const api = Router();
  api.use(apiController.setJSON);
  api.use('*', apiController.notFound);
  return api;
};

export default apiRouter;
