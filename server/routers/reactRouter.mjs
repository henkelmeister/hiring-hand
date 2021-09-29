import { Router } from 'express';
import { paths } from '../../config';

const reactRouter = () => {
  const router = Router();
  router.use((req, res) => res.sendFile(`${paths.public}/index.html`));
  return router;
};

export default reactRouter;

