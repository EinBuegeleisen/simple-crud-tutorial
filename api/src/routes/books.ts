import { Router } from "express";
import { BookController } from "../controllers/BookController";

const router = Router();

router.get("/", BookController.getBooks);

router.post("/", BookController.addBook);

router.post("/:id", BookController.editBook);

router.delete("/:id", BookController.deleteBook);

router.get("/:id", (req, res) => {
  res.send("Die Daten von einem Buch");
});

export default router;
