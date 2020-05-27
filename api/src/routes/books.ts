import { Router } from "express";
import { getRepository, ObjectID } from "typeorm";
import { Book } from "../entities/book";
const router = Router();

router.get("/", async function (req, res) {
  const bookRepository = getRepository(Book);
  const books = await bookRepository.find();
  res.send(books);
});

router.get("/:id", function (req, res) {
  res.send("Die Daten von einem Buch");
});

router.post("/", async function (req, res) {
  if (!(req.body.titel && req.body.autor && req.body.preis)) {
    res.status(400);
    res.send("Nicht alle Daten angegeben!");
    return;
  }

  const bookRepository = getRepository(Book);
  const newBook = new Book();
  newBook.titel = req.body.titel;
  newBook.autor = req.body.autor;
  newBook.preis = req.body.preis;
  await bookRepository.save(newBook);

  res.send("Neues Buch wurde angelegt.");
});

router.post("/:id", async (req, res) => {
  if (!(req.body.titel && req.body.autor && req.body.preis)) {
    res.status(400);
    res.send("Nicht alle Daten angegeben!");
    return;
  }

  const bookRepository = getRepository(Book);
  const editBook = await bookRepository.findOne(req.params.id);
  editBook.titel = req.body.titel;
  editBook.autor = req.body.autor;
  editBook.preis = req.body.preis;
  await bookRepository.save(editBook);
  res.send("Das Buch wurde aktualisiert.");
});

router.delete("/:id", async (req, res) => {
  const bookRepository = getRepository(Book);
  await bookRepository.delete(req.params.id);
  res.send("Das Buch wurde gelöscht.");
});

export default router;
