import { Router } from "express";
import { getRepository, ObjectID } from "typeorm";
import { Book } from "../entities/book";
const router = Router();

router.get("/", async (req, res) => {
  const bookRepository = getRepository(Book);
  const books = await bookRepository.find();
  res.send(books);
});

router.get("/:id", (req, res) => {
  res.send("Die Daten von einem Buch");
});

router.post("/", async (req, res) => {
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
});

router.post("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  const bookRepository = getRepository(Book);
  await bookRepository.delete(req.params.id);
  res.send("Das Buch wurde gelöscht.");
});

export default router;
