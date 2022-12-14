import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("organs")
export class Organ {
  @PrimaryGeneratedColumn("uuid")
  readonly organ_id: string;

  @ManyToOne(() => User, (user) => user.organs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ length: 50 })
  organ_type: string;

  @Column({ length: 50 })
  description: string;
}
