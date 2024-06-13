import { PartialType } from '@nestjs/mapped-types';
import { CreateBlutabnahmeDto } from './create-blutabnahme.dto';

export class UpdateBlutabnahmeDto extends PartialType(CreateBlutabnahmeDto) {}
