import { Injectable } from '@nestjs/common';
import { CreateBlutabnahmeDto } from './dto/create-blutabnahme.dto';
import { UpdateBlutabnahmeDto } from './dto/update-blutabnahme.dto';

@Injectable()
export class BlutabnahmeService {
  create(createBlutabnahmeDto: CreateBlutabnahmeDto) {
    return 'This action adds a new blutabnahme';
  }

  findAll() {
    return `This action returns all blutabnahme`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blutabnahme`;
  }

  update(id: number, updateBlutabnahmeDto: UpdateBlutabnahmeDto) {
    return `This action updates a #${id} blutabnahme`;
  }

  remove(id: number) {
    return `This action removes a #${id} blutabnahme`;
  }
}
