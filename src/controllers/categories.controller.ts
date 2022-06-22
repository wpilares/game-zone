import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/games/:gameId')
  getCategory(@Param('gameId') gameId: string, @Param('id') id: string) {
    return {
      message: `Game ${gameId} and ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de Crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
