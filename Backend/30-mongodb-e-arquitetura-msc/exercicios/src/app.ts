import express  from 'express';
import Connection from './models/connection';
import TournamentRoutes from './routes/TournamentRoutes';
export default class App {
  private connection = new Connection();
  private router = new TournamentRoutes().router;
  constructor(private app = express()) {
    this.config();
  }

  private config() {
    this.app.use(express.json());
    this.app.use('/tournaments', this.router);
    this.connection.getConnection();
  }

  public start(porta: number) {
    this.app.listen(porta, () => {
      console.log(`App rodando na porta ${porta}`);
    });
  }
}
