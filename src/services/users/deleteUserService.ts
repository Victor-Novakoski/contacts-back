import AppDataSource from '../../data-source'
import User from '../../entities/userEntity'
import AppError from '../../errors/AppError'

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOneBy({
    id: userId,
  })

  if (!findUser) {
    throw new AppError('User not found!', 404)
  }
  await userRepository.delete({ id: userId })
  return []
}

export default deleteUserService
