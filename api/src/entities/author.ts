import { Column, ManyToMany, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(() => Book, (book) => book.authors)
  public books: Book[];

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}