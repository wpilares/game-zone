import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './controllers/games.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    GamesController,
    CategoriesController,
    UsersController,
  ],
  providers: [AppService],
})
export class AppModule {}
