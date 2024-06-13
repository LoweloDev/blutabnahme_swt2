import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaborauftragService } from './laborauftrag.service';
import { CreateLaborauftragDto } from './dto/create-laborauftrag.dto';
import { UpdateLaborauftragDto } from './dto/update-laborauftrag.dto';

@Controller('laborauftrag')
export class LaborauftragController {
  constructor(private readonly laborauftragService: LaborauftragService) {}

  @Post()
  create(@Body() createLaborauftragDto: CreateLaborauftragDto) {
    return this.laborauftragService.create(createLaborauftragDto);
  }

  @Get()
  findAll() {
    return this.laborauftragService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laborauftragService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaborauftragDto: UpdateLaborauftragDto) {
    return this.laborauftragService.update(+id, updateLaborauftragDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laborauftragService.remove(+id);
  }
}
