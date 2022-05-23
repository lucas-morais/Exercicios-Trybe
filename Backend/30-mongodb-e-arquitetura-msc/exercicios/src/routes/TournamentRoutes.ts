import { Router } from 'express';
import TournamentController from '../controller/TournamentController';

export default class TournamentRoutes {
  constructor(
    private _router = Router(),
    private controller = new TournamentController()
  ) {
    this.addEndpoints();
  }

  private addEndpoints() {
    this._router.get('/', this.controller.getAll);
    this._router.get('/:year', this.controller.getByYear);
  }

  public get router() {
    return this._router;
  }
}
