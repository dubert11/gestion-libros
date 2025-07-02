import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Controller('libros')
export class LibroController {
  constructor(private readonly libroService: LibroService) {}

  @Post()
  create(@Body() dto: CreateLibroDto) {
    return this.libroService.create(dto);
  }

  @Get()
  findAll() {
    return this.libroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLibroDto) {
    return this.libroService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id);
  }
}
