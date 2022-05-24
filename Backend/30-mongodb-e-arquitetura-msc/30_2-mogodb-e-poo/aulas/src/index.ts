import Framecontroller from './controllers/Frame';
import LensController from './controllers/Lens';
import Frame from './interfaces/Frame';
import Lens from './interfaces/Lens';
import CustomRouter from './reoutes/Router';
import App from './server';

const server = new App();

const lensController = new LensController();
const frameController = new Framecontroller();

const lensRouter = new CustomRouter<Lens>();
lensRouter.addRoute(lensController);

const frameRouter = new CustomRouter<Frame>();
frameRouter.addRoute(frameController);

server.addRouter(lensRouter.router);
server.addRouter(frameRouter.router);

server.startServer();