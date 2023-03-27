import AppDataSource from '../../data-source'
import User from '../../entities/userEntity'
import { iUserResponse } from '../../interfaces/users'

export const listProfileService = async (
  userId: string
): Promise<iUserResponse> => {
  const userProfileRepo = AppDataSource.getRepository(User)

  const userProfile = await userProfileRepo
    .createQueryBuilder('user')
    .select(['user.id', 'user.name', 'user.email', 'user.phone', 'user.imageProfile'])
    .where('user.id = :id', { id: userId })
    .getOne()

  return userProfile
}
