import { getRepository } from "typeorm";
import { User } from "../models/User"

interface UserData {
    id?:string;
}

class GetUserService {
    public async execute(data:UserData): Promise<User | {}> {
        const{id} = data;

        const usersRepository = getRepository(User);
        
        const user = await usersRepository.findOne({id});

        if(!user){
            return {
                message:"user not found"
            }
        }

        return {
            id:user.id,
            name:user.name,
            email:user.email
        }
    }
}

export {GetUserService};