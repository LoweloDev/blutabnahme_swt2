import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProbeService } from './probe.service';
import { CreateProbeDto } from './dto/create-probe.dto';
import { UpdateProbeDto } from './dto/update-probe.dto';

@Controller('probe')
export class ProbeController {
  constructor(private readonly probeService: ProbeService) {}

  @Post()
  create(@Body() createProbeDto: CreateProbeDto) {
    return this.probeService.create(createProbeDto);
  }

  @Get()
  findAll() {
    return this.probeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.probeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProbeDto: UpdateProbeDto) {
    return this.probeService.update(+id, updateProbeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.probeService.remove(+id);
  }
}
