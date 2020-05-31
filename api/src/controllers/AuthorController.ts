import { User } from "../entities/user";
import { Author } from "../entities/author";
import { getRepository } from "typeorm";

export class AuthorController {
    public static async getAuthors(req, res) {
        const authorRepository = getRepository(Author);
        const authors = await authorRepository.find({relations:["books"]});
        res.send(authors);
    }

    public static async addAuthor(req, res) {
        if (!(req.body.name)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
    
        const authorRepository = getRepository(Author);
        const newAuthor = new Author();
        newAuthor.name = req.body.name;
        await authorRepository.save(newAuthor);
        
        res.send("Neuer Autor wurde angelegt.");
    }

    public static async editAuthor(req, res) {
        if (!(req.body.name)) {
          res.status(400);
          res.send("Nicht alle Daten angegeben!");
          return;
        }
      
        const authorRepository = getRepository(Author);
        const editAuthor = await authorRepository.findOne(req.params.id);
        editAuthor.name = req.body.name;
        await authorRepository.save(editAuthor);
        res.send("Der Autor wurde aktualisiert.");
    }

    public static async deleteAuthor(req, res) {
        const authorRepository = getRepository(Author);
        await authorRepository.delete(req.params.id);
        res.send("Der Autor wurde gelöscht.");
    }

}