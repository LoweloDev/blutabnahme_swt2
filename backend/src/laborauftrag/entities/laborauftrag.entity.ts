import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Blutabnahme } from "../../blutabnahme/entities/blutabnahme.entity";

@Entity()
export class Laborauftrag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patient_id: string;

  @Column()
  mitarbeiter_id: string;

  @Column()
  laborId: string;

  @Column({ type: 'date' })
  datum: Date;

  @Column()
  status: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Blutabnahme, (blutabnahme) => blutabnahme.laborauftrag) // Eager loading by default
  blutabnahmen: Blutabnahme[];

  constructor(obj?: Partial<Laborauftrag>) {
    Object.assign(this, obj);
  }
}
