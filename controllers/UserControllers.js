import { get } from "mongoose";
import UserServices from "../services/UserServices.js";

class UserControllers {
    async getAll(req, res) {
        try {
            const users = await UserServices.getAll();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async create(req, res) {
        try {
            const user = await UserServices.create(req.body);
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserControllers();