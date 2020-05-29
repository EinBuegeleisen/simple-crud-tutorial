import { Column, OneToMany, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book";

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

  @OneToMany(() => Book, (book) => book.createdBy)
  public books: Book[];

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}