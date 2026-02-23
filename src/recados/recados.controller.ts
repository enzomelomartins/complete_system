import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return 'todos os recados foram listados com sucesso.';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `essa rota retorna o ID ${id} com sucesso.`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
