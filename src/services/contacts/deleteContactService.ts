import AppDataSource from '../../data-source'
import Contact from '../../entities/contactEntity'
import AppError from '../../errors/AppError'

const deleteContactService = async (contactId: string) => {
  const ContactRepo = AppDataSource.getRepository(Contact)

  const contacts = await ContactRepo.findBy({
    id: contactId,
  })

  if (!contacts) {
    throw new AppError('Contact not found', 404)
  }

  await ContactRepo.delete({ id: contactId })
  return 204
}

export default deleteContactService
