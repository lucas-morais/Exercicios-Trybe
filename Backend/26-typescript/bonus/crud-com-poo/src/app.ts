import express, { Express, Request, Response, NextFunction } from 'express';
import UserController from './controller/UserController';

export default class App {
  
  private static PORT: number = 3000;
  private app: Express;
  private userController: UserController

  constructor() {

    this.app = express();

    this.app.use(express.json());

    this.userController = new UserController();

    this.routes();
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({message: 'Ok!'})
    });

    this.app.get('/users', async(req: Request, res: Response, next: NextFunction) => {
      await this.userController.list(req, res, next);
    })
  }

  public start() {
    this.app.listen(3000, () => console.log(`Running on port ${App.PORT}`))
  }

}