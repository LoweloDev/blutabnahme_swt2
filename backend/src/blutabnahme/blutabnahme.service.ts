import { Injectable } from "@nestjs/common";
import { CreateBlutabnahmeDto } from "./dto/create-blutabnahme.dto";
import { UpdateBlutabnahmeDto } from "./dto/update-blutabnahme.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Blutabnahme } from "./entities/blutabnahme.entity";

@Injectable()
export class BlutabnahmeService {
  constructor(
    @InjectRepository(Blutabnahme)
    private readonly blutabnahmeRepository: Repository<Blutabnahme>,
  ) {}

  async create(createBlutabnahmeDto: CreateBlutabnahmeDto) {
    return await this.blutabnahmeRepository.save(
      createBlutabnahmeDto,
    );
  }

  async findAll() {
    return await this.blutabnahmeRepository.find({
      relations: ["laborauftrag", "proben"],
    });
  }

  async findOne(id: string) {
    return await this.blutabnahmeRepository.findOne({
      where: { id },
      relations: ["laborauftrag", "proben"],
    });
  }

  async update(id: string, updateBlutabnahmeDto: UpdateBlutabnahmeDto) {
    await this.blutabnahmeRepository.update(id, updateBlutabnahmeDto);
    return await this.findOne(id); // Return the updated blutabnahme
  }

  async remove(id: string) {
    const deletedBlutabnahme = await this.findOne(id); // Optional: get details before removing
    await this.blutabnahmeRepository.delete(id);
    return deletedBlutabnahme; // Optional: return details of the removed blutabnahme
  }
}
