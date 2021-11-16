import { User } from '../models/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import { } from '../services/CreateUserService'


interface UserData {
  name: string
  email: string
  password: string
}

class CreateUserService {

  public async execute(data: UserData) {

    const { name, email, password } = data;

    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({ email })


    if (checkUserExists) {
      return {
        error: 'Email adress alread exist'
      }
    }
    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    await usersRepository.save(user);

    return user;
  }

}

export { CreateUserService }