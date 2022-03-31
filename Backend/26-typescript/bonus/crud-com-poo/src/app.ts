import express, { Express, Request, Response, NextFunction } from 'express';
import UserController from './controller/UserController';
import ErrorMddleware from './middlewares/error';
import DBContext from './models/connection';
import UserModel from './models/userModel';
import UserService from './services/UserServices';
import Config, { ConfigMap } from './config';

export default class App {
  
  private app: Express;
  private userController: UserController;
  private userService: UserService;
  private userModel: UserModel;
  private dbContext: DBContext;
  private config: ConfigMap

  constructor() {

    this.app = express();

    this.app.use(express.json());

    this.config = new Config()

    this.dbContext = new DBContext(this.config)

    this.userModel = new UserModel(this.dbContext);
    this.userService = new UserService(this.userModel);
    this.userController = new UserController(this.userService);
    

    this.routes();

    this.app.use(ErrorMddleware.handleError);
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({message: 'Ok!'})
    });

    this.app.get('/users', async(req: Request, res: Response, next: NextFunction) => {
      await this.userController.list(req, res, next);
    });

    this.app.post('/users', async(req: Request, res: Response, next: NextFunction) => {
      await this.userController.create(req, res, next);
    })
  }

  public start() {
    const port = this.config.api.port
    this.app.listen(port, () => console.log(`Running on port ${port}`))
  }



}