import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlutabnahmeService } from './blutabnahme.service';
import { CreateBlutabnahmeDto } from './dto/create-blutabnahme.dto';
import { UpdateBlutabnahmeDto } from './dto/update-blutabnahme.dto';

@Controller('blutabnahme')
export class BlutabnahmeController {
  constructor(private readonly blutabnahmeService: BlutabnahmeService) {}

  @Post()
  create(@Body() createBlutabnahmeDto: CreateBlutabnahmeDto) {
    return this.blutabnahmeService.create(createBlutabnahmeDto);
  }

  @Get()
  findAll() {
    return this.blutabnahmeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blutabnahmeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlutabnahmeDto: UpdateBlutabnahmeDto) {
    return this.blutabnahmeService.update(+id, updateBlutabnahmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blutabnahmeService.remove(+id);
  }
}
