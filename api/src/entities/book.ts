import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public titel: string;

  @Column()
  public autor: string;

  @Column()
  public preis: number;

  @Column()
  @CreateDateColumn()
  public anlegedatum: Date;
}