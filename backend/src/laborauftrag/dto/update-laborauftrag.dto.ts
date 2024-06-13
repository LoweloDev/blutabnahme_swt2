import { PartialType } from '@nestjs/mapped-types';
import { CreateLaborauftragDto } from './create-laborauftrag.dto';

export class UpdateLaborauftragDto extends PartialType(CreateLaborauftragDto) {}
