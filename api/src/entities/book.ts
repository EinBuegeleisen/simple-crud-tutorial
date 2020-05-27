import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public author: string;

  @Column()
  public price: number;

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}