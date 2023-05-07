// import { Module } from '@nestjs/common';
// // import { MongooseModule } from '@nestjs/mongoose';
// // import DTAT from './database/database.providers';
// @Module({
//   // imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/test')],
//   // controllers: [],
//   // providers: [],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MoviesShelfModule } from './movies-shelf/movies-shelf.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatsModule, MoviesShelfModule, UserModule],
})
export class AppModule {}
