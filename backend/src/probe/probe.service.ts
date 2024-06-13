import { Injectable } from '@nestjs/common';
import { CreateProbeDto } from './dto/create-probe.dto';
import { UpdateProbeDto } from './dto/update-probe.dto';

@Injectable()
export class ProbeService {
  create(createProbeDto: CreateProbeDto) {
    return 'This action adds a new probe';
  }

  findAll() {
    return `This action returns all probe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} probe`;
  }

  update(id: number, updateProbeDto: UpdateProbeDto) {
    return `This action updates a #${id} probe`;
  }

  remove(id: number) {
    return `This action removes a #${id} probe`;
  }
}
