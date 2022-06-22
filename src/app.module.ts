import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './controllers/games.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';
import { GamesService } from './services/games.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    GamesController,
    CategoriesController,
    UsersController,
  ],
  providers: [AppService, GamesService],
})
export class AppModule {}
