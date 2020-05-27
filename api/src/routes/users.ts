import { Router } from "express";
import { UserController } from "../controllers/UserController";
const router = Router();

router.get("/", UserController.getUsers);

router.post("/", UserController.addUser);

router.post("/:id", UserController.editUser);

router.delete("/:id", UserController.deleteUser);

router.get("/:id", function (req, res) {
  res.send("Die Daten von einem Benutzer");
});

export default router;
