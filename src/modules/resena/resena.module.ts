import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resena } from './resena.entity';
import { ResenaService } from './resena.service';
import { ResenaController } from './resena.controller';
import { Libro } from '../libro/libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resena, Libro])],
  controllers: [ResenaController],
  providers: [ResenaService],
})
export class ResenaModule {}
