import { Router, Request, Response} from "express";
import BookController from "../controllers/bookController";


const router = Router();

const bookController = new BookController();

router.get('/', async (_req: Request, res: Response) => {
  await bookController.getAll(_req, res);
});

router.get('/:id', async(req: Request, res: Response) => {
  await bookController.getById(req, res);
});

router.post('/', async(req: Request, res: Response) => {
  await bookController.create(req, res);
});

router.put('/:id', async(req: Request, res: Response) => {
  await bookController.update(req, res);
})

router.delete('/:id', async (req: Request, res: Response) => {
  await bookController.remove(req, res);
})

export default router;