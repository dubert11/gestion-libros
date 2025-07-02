import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resena } from './resena.entity';
import { CreateResenaDto } from './dto/create-resena.dto';
import { UpdateResenaDto } from './dto/update-resena.dto';
import { Libro } from '../libro/libro.entity';

@Injectable()
export class ResenaService {
  constructor(
    @InjectRepository(Resena)
    private resenaRepo: Repository<Resena>,
    @InjectRepository(Libro)
    private libroRepo: Repository<Libro>,
  ) {}

  async create(dto: CreateResenaDto) {
    const libro = await this.libroRepo.findOneBy({ id: dto.libroId });
    if (!libro) throw new NotFoundException('Libro no encontrado');

    const resena = this.resenaRepo.create({
      ...dto,
      libro,
    });

    return this.resenaRepo.save(resena);
  }

  findAll() {
    return this.resenaRepo.find();
  }

  async findOne(id: number) {
    const resena = await this.resenaRepo.findOne({ where: { id } });
    if (!resena) throw new NotFoundException(`Reseña ${id} no encontrada`);
    return resena;
  }

  async update(id: number, dto: UpdateResenaDto) {
    const resena = await this.findOne(id);
    if (dto.libroId) {
      const libro = await this.libroRepo.findOneBy({ id: dto.libroId });
      if (!libro) throw new NotFoundException('Libro no encontrado');
      resena.libro = libro;
    }
    Object.assign(resena, dto);
    return this.resenaRepo.save(resena);
  }

  async remove(id: number) {
    const resena = await this.findOne(id);
    return this.resenaRepo.remove(resena);
  }
}
