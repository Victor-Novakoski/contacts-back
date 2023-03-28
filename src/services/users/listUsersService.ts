import AppDataSource from '../../data-source'
import User from '../../entities/userEntity'
import AppError from '../../errors/AppError'
import { IUserReturn } from '../../interfaces/users'
import { usersReturnSerializer } from '../../schemas/user/userSchema'

const listUsersService = async (): Promise<IUserReturn[]> => {
  try {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const userWithoutPassord = await usersReturnSerializer.validate(users, {
      stripUnknown: true,
    })

    return userWithoutPassord as IUserReturn[]
  } catch (error: any) {
    throw new AppError(error.message, 404)
  }
}

export default listUsersService
