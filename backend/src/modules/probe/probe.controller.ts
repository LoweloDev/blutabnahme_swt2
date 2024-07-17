import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseGuards,
} from "@nestjs/common";
import { ProbeService } from "./probe.service";
import { CreateProbeDto } from "./dto/create-probe.dto";
import { UpdateProbeDto } from "./dto/update-probe.dto";
import { AuthGuard } from "../../shared/services/auth.guard";

@Controller("probe")
@UseGuards(AuthGuard)
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

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.probeService.findOne(id); // Use string id directly
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateProbeDto: UpdateProbeDto,
  ) {
    return await this.probeService.update(id, updateProbeDto); // Use string id directly
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.probeService.remove(id); // Use string id directly
  }
}
