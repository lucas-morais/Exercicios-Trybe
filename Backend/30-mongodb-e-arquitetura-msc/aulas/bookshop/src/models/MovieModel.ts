import { model as createModel} from 'mongoose'
import MoiveSchema, { IMovie } from '../schemas/MoovieSchema';

export default class MovieModel {
  constructor(private bookModel = createModel<IMovie>('movies', MoiveSchema)) {

  }

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.bookModel.find();
    return movies;
  }
}