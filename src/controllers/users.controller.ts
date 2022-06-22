import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':Id')
  getUser(@Param('Id') Id: string) {
    return {
      message: `User with id: ${Id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de Crear',
      payload,
    };
  }

  @Put(':Id')
  update(@Param('Id') Id: number, @Body() payload: any) {
    return {
      Id,
      payload,
    };
  }

  @Delete(':Id')
  delete(@Param('gameId') Id: number) {
    return Id;
  }
}
