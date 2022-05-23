import MovieModel from "../models/MovieModel";
import { IMovie } from "../schemas/MoovieSchema";

export default class MovieService{
  constructor(private model = new MovieModel()) {

  }

  public async getMovies():Promise<IMovie[]> {
    const movies = await this.model.getMovies();
    return movies;
  }
}