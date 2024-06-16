import { Injectable } from "@nestjs/common";
import { CreateLaborauftragDto } from "./dto/create-laborauftrag.dto";
import { UpdateLaborauftragDto } from "./dto/update-laborauftrag.dto";
import { Repository } from "typeorm";
import { Laborauftrag } from "./entities/laborauftrag.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Blutabnahme } from "../blutabnahme/entities/blutabnahme.entity";

@Injectable()
export class LaborauftragService {

  constructor(@InjectRepository(Laborauftrag) private readonly repo: Repository<Laborauftrag>) {}

  create(createLaborauftragDto: CreateLaborauftragDto) {
    return this.repo.save(createLaborauftragDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  update(id: string, updateLaborauftragDto: UpdateLaborauftragDto) {
    return this.repo.update(id, updateLaborauftragDto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
