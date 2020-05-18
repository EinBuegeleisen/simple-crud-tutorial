import * as express from "express";
import * as bodyParser from "body-parser";
import path = require("path");

const app = express();

app.use(bodyParser.json());

let users: string[] = [];

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/users", (req, res) => {
    users.push(req.body.name);
    res.send("Neuer Benutzer erstellt");
});

app.post("/users/:name", (req, res) => {
    //users = users.map((user) => {if (user == req.body.name) {}});
    for (let user of users)
        if(user == req.params.name)
            user = req.body.name;
    res.send("Benutzer geändert");
});

app.delete("/users/:name", (req, res) => {
    users = users.filter((user) => {return user != req.params.name});
    res.send("Benutzer gelöscht");
});

app.use("/", express.static(path.join(__dirname, "../frontend/dist/simple-crud")));

app.listen(3000, () => console.log("Server"));