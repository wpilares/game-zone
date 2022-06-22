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
  @Get()
  getGames(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Games: limit=> ${limit}, offset=> ${offset}, brand=>${brand}`,
    };
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
    return {
      message: `Game ${gameId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de Crear',
      payload,
    };
  }

  @Put(':gameId')
  update(@Param('gameId') gameId: number, @Body() payload: any) {
    return {
      gameId,
      payload,
    };
  }

  @Delete(':gameId')
  delete(@Param('gameId') gameId: number) {
    return gameId;
  }
}
