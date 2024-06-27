import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { Laborauftrag } from "src/laborauftrag/entities/laborauftrag.entity";
import { Probe } from "src/probe/entities/probe.entity";
import { MockValue } from "../../shared/decorators/mock-value.decorator";

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

  @OneToMany(() => Probe, (probe) => probe.blutabnahme)
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
