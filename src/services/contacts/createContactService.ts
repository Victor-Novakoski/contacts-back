import AppDataSource from '../../data-source'
import Contact from '../../entities/contactEntity'
import User from '../../entities/userEntity'
import AppError from '../../errors/AppError'
import { iContact, iContactRequest } from '../../interfaces/contact'
import { contactReturnSerializer } from '../../schemas/contact/contactSchema'

const createContactService = async (
  userId: string,
  contactData: iContactRequest
): Promise<iContact> => {
  const contactRepo = AppDataSource.getRepository(Contact)
  const userRepo = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({
    id: userId,
  })

  const findContact = await contactRepo.findOneBy({
    name: contactData.name,
    email: contactData.email,
    phone: contactData.phone,
  })

  if (!user) {
    throw new AppError('user not found', 404)
  }

  if (findContact) {
    throw new AppError('contact already exists!', 409)
  }

  try {
    const createdContact = contactRepo.create(contactData)

    await contactRepo.save({ ...createdContact, user })

    const returnContact = contactRepo.findOneBy({
      email: contactData.email,
    })

    return returnContact
  } catch (error: any) {
    throw new AppError(error.message, 409)
  }
}

export default createContactService
