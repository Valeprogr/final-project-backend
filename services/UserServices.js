import User from "../models/User.js";

class UserServices {
    async create(user){
        const createUser= await User.create(user);
        return createUser
    }
    async getAll(){
        const users= await User.find();
        return users
    }
    
    async getOne(id){
        if(!id){
            throw new Error ("id Missing")
        }
        const user = await User.findById(id);
        return user
    }
}

export default UserServices();