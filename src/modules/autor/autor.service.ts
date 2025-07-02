import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autor.entity';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepo: Repository<Autor>,
  ) {}

  create(dto: CreateAutorDto) {
    const autor = this.autorRepo.create(dto);
    return this.autorRepo.save(autor);
  }

  findAll() {
    return this.autorRepo.find();
  }

  async findOne(id: number) {
    const autor = await this.autorRepo.findOneBy({ id });
    if (!autor) throw new NotFoundException(`Autor ${id} no encontrado`);
    return autor;
  }

  async update(id: number, dto: UpdateAutorDto) {
    const autor = await this.findOne(id);
    Object.assign(autor, dto);
    return this.autorRepo.save(autor);
  }

  async remove(id: number) {
    const autor = await this.findOne(id);
    return this.autorRepo.remove(autor);
  }
}
