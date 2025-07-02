import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResenaService } from './resena.service';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';

@Controller('resenas')
export class ResenaController {
  constructor(private readonly resenaService: ResenaService) {}

  @Post()
  create(@Body() dto: CreateResenaDto) {
    return this.resenaService.create(dto);
  }

  @Get()
  findAll() {
    return this.resenaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resenaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateResenaDto) {
    return this.resenaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resenaService.remove(+id);
  }
}
