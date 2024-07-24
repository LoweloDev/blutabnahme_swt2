import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Blutabnahme } from "../../blutabnahme/entities/blutabnahme.entity";
import { MockValue } from "../../../shared/decorators/mock-value.decorator";

@Entity()
export class Probe {
  @PrimaryGeneratedColumn("uuid") // Use UUID for a unique identifier
  @MockValue()
  id: string;

  @Column({ nullable: true })
  @MockValue()
  laborauftrag_id?: string;

  @Column()
  @MockValue()
  material: string;

  @Column({ type: "date", nullable: true })
  @MockValue()
  timestamp?: Date;

  @Column({ nullable: true, default: "probe" })
  @MockValue()
  type?: string = "probe";

  @ManyToOne(() => Blutabnahme, (blutabnahme) => blutabnahme.proben, {
    onDelete: "CASCADE",
  })
  @MockValue()
  blutabnahme: Blutabnahme;
}
