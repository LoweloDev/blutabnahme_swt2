import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { MockValue } from "../../../shared/decorators/mock-value.decorator";
import { Probe } from "../../probe/entities/probe.entity";
import { Laborauftrag } from "../../laborauftrag/entities/laborauftrag.entity";

@Entity()
export class Blutabnahme {
  @PrimaryGeneratedColumn("uuid")
  @MockValue()
  id: string;

  @Column({ nullable: true })
  @MockValue()
  mitarbeiter_id?: string;

  @Column({ nullable: true })
  @MockValue()
  patient_id?: string;

  @Column({ type: "date", nullable: true })
  @MockValue()
  timestamp?: Date;

  @OneToMany(() => Probe, (probe) => probe.blutabnahme, { cascade: true })
  @MockValue()
  proben: Probe[];

  @ManyToOne(() => Laborauftrag, (laborauftrag) => laborauftrag.blutabnahmen)
  @MockValue()
  laborauftrag: Laborauftrag;

  @Column({ nullable: true })
  @RelationId((blutabnahme: Blutabnahme) => blutabnahme.laborauftrag)
  @MockValue()
  laborauftrag_id?: string;
}
