import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProbeDto } from "./dto/create-probe.dto";
import { UpdateProbeDto } from "./dto/update-probe.dto";
import { Probe } from "./entities/probe.entity";

@Injectable()
export class ProbeService {
  constructor(
    @InjectRepository(Probe)
    private readonly probeRepository: Repository<Probe>,
  ) {}

  async create(createProbeDto: CreateProbeDto) {
    return await this.probeRepository.save(createProbeDto); // Return the created probe
  }

  async findAll() {
    return await this.probeRepository.find({
      relations: ["blutabnahme"], // Include related Blutabnahme entity
    });
  }

  async findOne(id: string) {
    return await this.probeRepository.findOne({
      where: { id },
      relations: ["blutabnahme"], // Include related Blutabnahme entity
    });
  }

  async update(id: string, updateProbeDto: UpdateProbeDto) {
    await this.probeRepository.update(id, updateProbeDto);
    return await this.findOne(id); // Return the updated probe
  }

  async remove(id: string) {
    const deletedProbe = await this.findOne(id); // Optional: get details before removing
    await this.probeRepository.delete(id);
    return deletedProbe; // Optional: return details of the removed probe
  }
}
