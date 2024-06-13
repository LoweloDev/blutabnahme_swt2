import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Blutabnahme } from '../../blutabnahme/entities/blutabnahme.entity';

@Entity()
export class Probe {
  @PrimaryGeneratedColumn('uuid') // Use UUID for a unique identifier
  id: string;

  @Column({ nullable: true })
  laborauftrag_id?: string;

  @Column()
  material: string;

  @Column({ type: 'timestamp', nullable: true })
  timestamp?: Date;

  @ManyToOne(() => Blutabnahme, (blutabnahme) => blutabnahme.proben) // Eager loading by default
  blutabnahme: Blutabnahme;
}
