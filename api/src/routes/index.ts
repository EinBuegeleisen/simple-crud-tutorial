import { Router } from "express";
import users from "./users";
import books from "./books";

const routes = Router();
routes.use("/users", users);
routes.use("/books", books);

export default routes;