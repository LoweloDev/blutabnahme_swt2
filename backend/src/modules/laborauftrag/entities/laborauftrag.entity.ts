import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Blutabnahme } from "../../blutabnahme/entities/blutabnahme.entity";
import { MockValue } from "../../../shared/decorators/mock-value.decorator";

@Entity()
export class Laborauftrag {
  @PrimaryGeneratedColumn("uuid")
  @MockValue()
  id: string;

  @Column()
  @MockValue()
  patient_id: string;

  @Column()
  @MockValue()
  mitarbeiter_id: string;

  @Column()
  @MockValue()
  laborId: string;

  @Column({ type: "date" })
  @MockValue()
  datum: Date;

  @Column()
  @MockValue()
  status: string;

  @Column({ type: "text", nullable: true })
  @MockValue()
  description: string;

  @OneToMany(() => Blutabnahme, (blutabnahme) => blutabnahme.laborauftrag)
  @MockValue()
  blutabnahmen: Blutabnahme[];

  constructor(obj?: Partial<Laborauftrag>) {
    Object.assign(this, obj);
  }
}
