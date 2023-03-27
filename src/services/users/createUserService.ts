import AppDataSource from '../../data-source'
import User from '../../entities/userEntity'
import AppError from '../../errors/AppError'
import { IUser, IUserRequest } from '../../interfaces/users'
import { userReturnSerializer } from '../../schemas/user/userSchema'

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User)
  const findUser = await userRepository.findOneBy({
    email: userData.email,
  })

  if (findUser) {
    throw new AppError('User already exists!', 409)
  }

  try {
    const createdUser = userRepository.create(userData)

    await userRepository.save(createdUser)

    const userWithoutPassord = await userReturnSerializer.validate(
      createdUser,
      {
        stripUnknown: true,
      }
    )
    return userWithoutPassord
  } catch (error: any) {
    throw new AppError(error.message, 409)
  }
}

export default createUserService
