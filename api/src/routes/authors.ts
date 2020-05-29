import { Router } from "express";
import { AuthorController } from "../controllers/AuthorController";

const router = Router();

router.get("/", AuthorController.getAuthors);

router.post("/", AuthorController.addAuthor);

router.post("/:id", AuthorController.editAuthor);

router.delete("/:id", AuthorController.deleteAuthor);

router.get("/:id", (req, res) => {
  res.send("Die Daten von einem Autor");
});

export default router;
