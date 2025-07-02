import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Autor } from '../autor/autor.entity';
import { Categoria } from '../categoria/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro, Autor, Categoria])],
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
