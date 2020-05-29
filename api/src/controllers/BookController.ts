import { Book } from "../entities/book";
import { User } from "../entities/user";
import { Author } from "../entities/author";
import { getRepository } from "typeorm";

export class BookController {
    public static async getBooks(req, res) {
        const bookRepository = getRepository(Book);
        const books = await bookRepository.find({relations:["createdBy", "authors"]});
        res.send(books);
    }
      
    public static async addBook(req, res) {
        if (!(req.body.title && req.body.authorId && req.body.price && req.body.userId)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
      
        const bookRepository = getRepository(Book);
        const userRepository = getRepository(User);
        const authorRepository = getRepository(Author);
        const newBook = new Book();
        newBook.title = req.body.title;
        newBook.authors = [await authorRepository.findOne(req.body.authorId)];
        newBook.price = req.body.price;
        newBook.createdBy = await userRepository.findOne(req.body.userId);
        await bookRepository.save(newBook);
      
        res.send("Neues Buch wurde angelegt.");
    }
      
    public static async editBook(req, res) {
        if (!(req.body.title && req.body.authorId && req.body.price)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
      
        const bookRepository = getRepository(Book);
        const authorRepository = getRepository(Author);
        const editBook = await bookRepository.findOne(req.params.id);
        editBook.title = req.body.title;
        editBook.authors = [await authorRepository.findOne(req.body.authorId)];
        editBook.price = req.body.price;
        await bookRepository.save(editBook);
        res.send("Das Buch wurde aktualisiert.");
    }
      
    public static async deleteBook(req, res) {
        const bookRepository = getRepository(Book);
        await bookRepository.delete(req.params.id);
        res.send("Das Buch wurde gelöscht.");
    }
}