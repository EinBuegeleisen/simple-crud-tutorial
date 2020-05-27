import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public nickname: string;

  @Column()
  public password: string;

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}