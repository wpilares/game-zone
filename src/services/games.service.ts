import { Injectable } from '@nestjs/common';
import { Game } from '../entities/game.entity';

@Injectable()
export class GamesService {
  private counterId = 1;
  private games: Game[] = [
    {
      gameId: 1,
      name: 'God of War',
      description: 'Kratos',
      price: 60,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.games;
  }

  findOne(gameId: number) {
    return this.games.find((item) => item.gameId === gameId);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newGame = {
      gameId: this.counterId,
      ...payload,
    };
    this.games.push(newGame);
    return newGame;
  }

  update(gameId: number, payload: any) {
    const game = this.findOne(gameId);
    if (game) {
      const index = this.games.findIndex((item) => item.gameId === gameId);
      this.games[index] = {
        ...game,
        ...payload,
      };
      return this.games[index];
    }
    return null;
  }
}
