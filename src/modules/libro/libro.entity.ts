import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Autor } from '../autor/autor.entity';
import { Categoria } from '../categoria/categoria.entity';
import { Resena } from '../resena/resena.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  anio: number;

  @ManyToOne(() => Autor, autor => autor.libros, { eager: true })
  autor: Autor;

  @ManyToOne(() => Categoria, categoria => categoria.libros, { eager: true })
  categoria: Categoria;

  @OneToMany(() => Resena, resena => resena.libro)
  resenas: Resena[];
}
