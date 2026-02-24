import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
  const { limit = 10, offset = 0 } = pagination;
    return `Retorna todos os recados. Limit=${limit}, Offset=${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `essa rota retorna o ID ${id} com sucesso.`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body
    }
  }
  
  @Delete(':id')
  remove (@Param('id') id: string) {
    return `Essa rota APAGA o recado ID ${id}`;
  }
}
