import AppDataSource from '../../data-source'
import { hash } from 'bcryptjs'
import { iUserResponse, IUserReturn, IUserUpdate } from '../../interfaces/users'
import User from '../../entities/userEntity'
import { userReturnSerializer } from '../../schemas/user/userSchema'

export const patchUserService = async (
  userId: string,
  userData: IUserUpdate
): Promise<IUserReturn> => {
  const userRepo = AppDataSource.getRepository(User)
  const user = await userRepo.findOneBy({ id: userId })

  if (userData.name) {
    user.name = userData.name
  }
  if (userData.email) {
    user.email = userData.email
  }
  if (userData.password) {
    user.password = await hash(userData.password, 10)
  }
  if (userData.imageProfile) {
    user.imageProfile = userData.imageProfile
  }
  if (userData.phone) {
    user.phone = userData.phone
  }

  await userRepo.save(user)

  const returnContent = await userReturnSerializer.validate(user, {
    stripUnknown: true,
  })

  return returnContent
}
