import TournamentModel from "../models/TournamentModel";
import { ITournament } from "../schemas/TournamentSchema";

export default class TournamentService {
  constructor(private model = new TournamentModel()) {}

  async getAll():Promise<ITournament[]> {
    const tournaments = await this.model.getAll();
    return tournaments;
  }

  async getByYear(year: number): Promise <ITournament | null>{
    const tournament = await this.model.getByYear(year);
    return tournament;
  }
}