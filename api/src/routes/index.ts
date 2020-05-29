import { Router } from "express";
import users from "./users";
import books from "./books";
import authors from "./authors";

const routes = Router();
routes.use("/users", users);
routes.use("/books", books);
routes.use("/authors", authors);

export default routes;