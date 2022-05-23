import { Schema } from "mongoose";

export interface IMovie {
  title: string;
  releaseYear: number;
}

const MoiveSchema = new Schema<IMovie>({
  title: { type: String, required: true},
  releaseYear: {type: Number, required: true}
}, { versionKey: false});

export default MoiveSchema;