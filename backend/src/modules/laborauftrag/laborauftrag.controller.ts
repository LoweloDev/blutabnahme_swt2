import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseGuards,
} from "@nestjs/common";
import { LaborauftragService } from "./laborauftrag.service";
import { CreateLaborauftragDto } from "./dto/create-laborauftrag.dto";
import { UpdateLaborauftragDto } from "./dto/update-laborauftrag.dto";
import { AuthGuard } from "../../shared/services/auth.guard";

@Controller("laborauftrag")
@UseGuards(AuthGuard)
export class LaborauftragController {
  constructor(private readonly laborauftragService: LaborauftragService) {}

  @Post()
  create(
    @Body()
    createLaborauftragDto: CreateLaborauftragDto[] | CreateLaborauftragDto,
  ) {
    return this.laborauftragService.create(
      Array.isArray(createLaborauftragDto)
        ? createLaborauftragDto
        : [createLaborauftragDto],
    );
  }

  @Get()
  findAll() {
    return this.laborauftragService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.laborauftragService.findOne(id); // Use string id directly
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateLaborauftragDto: UpdateLaborauftragDto,
  ) {
    return await this.laborauftragService.update(id, updateLaborauftragDto); // Use string id directly
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.laborauftragService.remove(id); // Use string id directly
  }
}
