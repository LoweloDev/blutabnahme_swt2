import { CreateLaborauftragDto } from "./create-laborauftrag.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateLaborauftragDto extends PartialType(CreateLaborauftragDto) {}
