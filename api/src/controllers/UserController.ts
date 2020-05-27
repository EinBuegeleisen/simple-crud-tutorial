import { User } from "../entities/user";
import { getRepository } from "typeorm";

export class UserController {
    public static async getUsers(req, res) {
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        res.send(users);
    }

    public static async addUser(req, res) {
        if (!(req.body.name && req.body.nickname && req.body.password)) {
            res.status(400);
            res.send("Nicht alle Daten angegeben!");
            return;
        }
    
        const userRepository = getRepository(User);
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.nickname = req.body.nickname;
        newUser.password = req.body.password;
        await userRepository.save(newUser);
        
        res.send("Neuer Benutzer wurde angelegt.");
    }

    public static async editUser(req, res) {
        if (!(req.body.name && req.body.nickname && req.body.password)) {
          res.status(400);
          res.send("Nicht alle Daten angegeben!");
          return;
        }
      
        const userRepository = getRepository(User);
        const editUser = await userRepository.findOne(req.params.id);
        editUser.name = req.body.name;
        editUser.nickname = req.body.nickname;
        editUser.password = req.body.password;
        await userRepository.save(editUser);
        res.send("Der Benutzer wurde aktualisiert.");
    }

    public static async deleteUser(req, res) {
        const userRepository = getRepository(User);
        await userRepository.delete(req.params.id);
        res.send("Der Benutzer wurde gelöscht.");
    }

}