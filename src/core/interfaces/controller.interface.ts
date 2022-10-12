import { Router } from 'express';

interface Controller {
  router: Router;
  basePath: string;
}

export default Controller;
