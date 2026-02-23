import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return 'todos os recados foram listados com sucesso.';
  }

  @Get(':id')
  findOne() {
    return 'apenas um recado foi listado com sucesso.';
  }
}
