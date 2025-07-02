import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {}
// Este DTO se utiliza para actualizar un autor existente en la base de datos.