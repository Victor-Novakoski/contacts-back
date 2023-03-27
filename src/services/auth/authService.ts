import AppDataSource from '../../data-source'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import User from '../../entities/userEntity'
import AppError from '../../errors/AppError'
import { IUserLogin } from '../../interfaces/users'

const authService = async ({
  email,
  password,
}: IUserLogin): Promise<object> => {
  const userRepo = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({
    email,
  })

  if (!user) {
    throw new AppError('Wrong username or password.', 401)
  }

  const validatedPassword = await compare(password, user.password)

  if (!validatedPassword) {
    throw new AppError('Wrong username or password.', 401)
  }

  const token = jwt.sign({ isAdm: user.isAdm }, process.env.SECRET_KEY!, {
    expiresIn: '24h',
    subject: user.id,
  })

  return {
    token,
  }
}

export default authService
