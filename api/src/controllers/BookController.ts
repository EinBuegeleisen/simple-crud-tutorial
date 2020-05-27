import { Book } from "../entities/book";
import { getRepository } from "typeorm";

export class BookController {
    public static async getBooks(req, res) {
        const bookRepository = getRepository(Book);
        const books = await bookRepository.find();
        res.send(books);
    }
      
    public static async addBook(req, res) {
        if (!(req.body.title && req.body.author && req.body.price)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
      
        const bookRepository = getRepository(Book);
        const newBook = new Book();
        newBook.title = req.body.title;
        newBook.author = req.body.author;
        newBook.price = req.body.price;
        await bookRepository.save(newBook);
      
        res.send("Neues Buch wurde angelegt.");
    }
      
    public static async editBook(req, res) {
        if (!(req.body.title && req.body.author && req.body.price)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
      
        const bookRepository = getRepository(Book);
        const editBook = await bookRepository.findOne(req.params.id);
        editBook.title = req.body.title;
        editBook.author = req.body.author;
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