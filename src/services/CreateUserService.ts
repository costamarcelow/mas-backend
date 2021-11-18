import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../models/User";

interface UserData {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute(data: UserData): Promise<User | {}> {
        const { name, email, password } = data;
        const userRepository = getRepository(User);
        const checkUserExists = await userRepository.findOne({ email });

        if (checkUserExists) {
            return {
                error: "Email address already exists!"
            };

        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: hashedPassword

        });

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService };