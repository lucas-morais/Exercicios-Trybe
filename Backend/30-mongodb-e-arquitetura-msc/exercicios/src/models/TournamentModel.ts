import { model as createModel } from 'mongoose';
import TournamentSchema, { ITournament } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(
    private tournamentModel = createModel('tournaments', TournamentSchema)
  ) {}

  public async getAll():Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.find();
    return tournaments;
  }

  public async getByYear(year: number):Promise<ITournament | null> {
    const tournament = await this.tournamentModel.findOne({year});
    return tournament;
  }
}
