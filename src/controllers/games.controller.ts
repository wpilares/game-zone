import { GamesService } from '../services/games.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  getGames(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Games: limit=> ${limit}, offset=> ${offset}, brand=>${brand}`,
    // };
    return this.gamesService.findAll();
  }

  @Get('filter')
  getGameFilter() {
    return {
      message: `I'm a Filter`,
    };
  }

  @Get(':gameId')
  @HttpCode(HttpStatus.ACCEPTED)
  getGame(@Param('gameId') gameId: number) {
    // return {
    //   message: `Game ${gameId}`,
    // };
    return this.gamesService.findOne(+gameId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'Accion de Crear',
    //   payload,
    // };
    return this.gamesService.create(payload);
  }

  @Put(':gameId')
  update(@Param('gameId') gameId: number, @Body() payload: any) {
    return this.gamesService.update(+gameId, payload);
  }

  @Delete(':gameId')
  delete(@Param('gameId') gameId: number) {
    return gameId;
  }
}
