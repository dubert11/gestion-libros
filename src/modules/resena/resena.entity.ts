import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity()
export class Resena {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comentario: string;

  @Column('int')
  calificacion: number;

  @ManyToOne(() => Libro, libro => libro.resenas, { eager: true })
  libro: Libro;
}
// Este modelo define la entidad Resena, que representa una reseña de un libro.