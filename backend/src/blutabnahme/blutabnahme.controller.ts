import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BlutabnahmeService } from "./blutabnahme.service";
import { CreateBlutabnahmeDto } from "./dto/create-blutabnahme.dto";
import { UpdateBlutabnahmeDto } from "./dto/update-blutabnahme.dto";

@Controller("blutabnahme")
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

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.blutabnahmeService.findOne(id); // Use string id directly
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateBlutabnahmeDto: UpdateBlutabnahmeDto,
  ) {
    return await this.blutabnahmeService.update(id, updateBlutabnahmeDto); // Use string id directly
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.blutabnahmeService.remove(id); // Use string id directly
  }
}
