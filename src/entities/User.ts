import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Thread } from "./Thread";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  profile_picture: string;

  @Column({ nullable: true })
  profile_descpription: string;

  @OneToMany(() => Thread, (threads) => threads.user)
  thread: Thread[];

  //   @OneToMany(() => Thread, (threads) => threads.user)
  //   thread: Thread[];
}
