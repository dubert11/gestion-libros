import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Autor } from '../autor/autor.entity';
import { Categoria } from '../categoria/categoria.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepo: Repository<Libro>,

    @InjectRepository(Autor)
    private autorRepo: Repository<Autor>,

    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  async create(dto: CreateLibroDto) {
    const autor = await this.autorRepo.findOneBy({ id: dto.autorId });
    const categoria = await this.categoriaRepo.findOneBy({ id: dto.categoriaId });

    if (!autor) throw new NotFoundException('Autor no encontrado');
    if (!categoria) throw new NotFoundException('Categoría no encontrada');

    const libro = this.libroRepo.create({
      ...dto,
      autor,
      categoria,
    });
    return this.libroRepo.save(libro);
  }

  findAll() {
    return this.libroRepo.find();
  }

  async findOne(id: number) {
    const libro = await this.libroRepo.findOne({ where: { id } });
    if (!libro) throw new NotFoundException(`Libro ${id} no encontrado`);
    return libro;
  }

  async update(id: number, dto: UpdateLibroDto) {
    const libro = await this.findOne(id);

    if (dto.autorId) {
      const autor = await this.autorRepo.findOneBy({ id: dto.autorId });
      if (!autor) throw new NotFoundException('Autor no encontrado');
      libro.autor = autor;
    }

    if (dto.categoriaId) {
      const categoria = await this.categoriaRepo.findOneBy({ id: dto.categoriaId });
      if (!categoria) throw new NotFoundException('Categoría no encontrada');
      libro.categoria = categoria;
    }

    Object.assign(libro, dto);
    return this.libroRepo.save(libro);
  }

  async remove(id: number) {
    const libro = await this.findOne(id);
    return this.libroRepo.remove(libro);
  }
}