import { Request, Response } from "express";
import MovieService from "../services/MovieService";

export default class MovieController {
  constructor(private service = new MovieService()) {

  }

  getMovies = async(req:Request, res: Response) => {
    try {
      const movies = await this.service.getMovies();
      return res.status(200).json(movies)
    }catch(err) {
      return res.status(500).json('Internal server error');
    }
  }
}