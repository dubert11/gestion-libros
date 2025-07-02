import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsInt()
  anio: number;

  @IsInt()
  autorId: number;

  @IsInt()
  categoriaId: number;
}
