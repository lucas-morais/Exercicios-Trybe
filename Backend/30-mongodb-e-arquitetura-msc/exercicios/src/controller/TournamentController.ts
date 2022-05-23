import { Request, Response } from "express";
import TournamentService from "../services/TournamentService";

export default class TournamentController {
  constructor(private service = new TournamentService()) {}

  public getAll = async(req: Request, res: Response): Promise<Response | void> => {
    try {
      const tournaments = await this.service.getAll();
      return res.status(200).json(tournaments);
    } catch(err) {
      return res.status(500).json(err);
    }
  }

  public getByYear = async(req: Request, res: Response): Promise<Response | void> => {
    try {
      const { year } = req.params;
      const tournament = await this.service.getByYear(Number(year));
      if(!tournament) {
        return res.status(404).json({message: `Não houve copa em ${year}`});
      }
      return res.status(200).json(tournament);
    } catch(err) {
      return res.status(500).json(err);
    }
  }
}