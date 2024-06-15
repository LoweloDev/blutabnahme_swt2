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

@Entity()
export class Blutabnahme {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  mitarbeiter_id?: string;

  @Column({ nullable: true })
  patient_id?: string;

  @Column({ type: "timestamp", nullable: true })
  timestamp?: Date;

  @OneToMany(() => Probe, (probe) => probe.blutabnahme)
  proben: Probe[];

  @ManyToOne(() => Laborauftrag, (laborauftrag) => laborauftrag.blutabnahmen) // Eager loading by default
  laborauftrag: Laborauftrag;

  @Column({ nullable: true })
  @RelationId((blutabnahme: Blutabnahme) => blutabnahme.laborauftrag) // Redundant with ManyToOne
  laborauftrag_id?: string; // Consider removing for clarity and consistency
}
