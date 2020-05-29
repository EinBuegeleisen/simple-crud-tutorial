import { Column, ManyToOne, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user";
import { Author } from "./author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public price: number;

  @ManyToOne(() => User, (user) => user.books)
  public createdBy: User;

  @JoinTable()
  @ManyToMany(() => Author, (author) => author.books)
  public authors: Author[];

  @Column()
  @CreateDateColumn()
  public creationDate: Date;
}