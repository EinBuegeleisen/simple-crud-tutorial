import * as express from "express";
import routes from "./routes/index";
import { createConnection } from "typeorm";
import { User } from "./entities/user";
import { Book } from "./entities/book";
import "reflect-metadata";
import * as bodyParser from "body-parser";


createConnection({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "erdölerdöl",
    database: "simpleCrudTutorialDB",
    entities: [User, Book],
}).then(async (connection) => {

    await connection.synchronize();

    const app = express();

    app.use(bodyParser.json());

    app.use("/api", routes);

    app.listen(3000, function () {
        console.log("Server started on port 3000!");
    });

});



/*
GET -> Anzeige
POST -> Hinzuzufügen / Aktualisieren
DELETE -> Löschen
*/

/*



import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

const app = express();

app.use(bodyParser.json());

let users: string[] = [];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  users.push(req.body.name);
  res.send(true);
});
app.post("/users/:name", (req, res) => {
  users = users.map((u) => {
    if (u == req.params.name) {
      u = req.body.name;
    }
    return u;
  })
  res.send(true);
});
app.delete("/users/:name", (req, res) => {
  users = users.filter((user) => {
    return user != req.params.name;
  });
  res.send(true);
});

app.use("/", express.static(path.join(__dirname, "../frontend/dist/simple-crud")))

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
*/