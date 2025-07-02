import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  nacionalidad: string;

  @OneToMany(() => Libro, libro => libro.autor)
  libros: Libro[]; // ✅ Aquí defines la relación inversa
}
