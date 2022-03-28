import { Request, Response, Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.route('/')
  .get(async (req: Request, res: Response) => {
    await userController.getAll(req, res);
  })
  .post(async (req: Request, res: Response) => {
    await userController.create(req, res);
  })

router.route('/:id')
  .get(async (req: Request, res: Response) => {
    await userController.getById(req, res);
  })
  .put(async (req: Request, res: Response) => {
    await userController.update(req, res);
  })
  .delete(async (req: Request, res: Response) => {
    await userController.delete(req, res);
  })

export default router;