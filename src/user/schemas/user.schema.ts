// import * as mongoose from 'mongoose';
// export const MoviesShelfSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   rating: String,
//   // theater: Types.ObjectId,
//   director: String,
//   // cast: string[];
//   duration: String,
//   release_date: String,
//   poster: String,
//   trailer: String,
//   synopsis: String,
//   genre: String,
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  bonus: [string];

  @Prop({ default: true })
  sex: string;

  @Prop({ default: true })
  mobile: string;

  @Prop({ default: true })
  birth: Date;

  @Prop({ default: true })
  hobby: [string];

  @Prop({ default: true })
  enable: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
