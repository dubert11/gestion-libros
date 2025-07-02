import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Módulos propios
import { AutorModule } from './modules/autor/autor.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { LibroModule } from './modules/libro/libro.module';
import { ResenaModule } from './modules/resena/resena.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'gestion_libros',
      autoLoadEntities: true,
      synchronize: true, // solo para desarrollo
    }),
    AutorModule,
    CategoriaModule,
    LibroModule,
    ResenaModule,
  ],
})
export class AppModule {}
