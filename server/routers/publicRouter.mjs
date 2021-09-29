import { static as serve, Router } from 'express';
import { paths } from '../../config';

const publicRouter = () => {
  const router = Router();
  router.use(serve(paths.public));
  return router;
};

export default publicRouter;
