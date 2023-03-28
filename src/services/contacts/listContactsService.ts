import AppDataSource from '../../data-source'
import Contact from '../../entities/contactEntity'

const listContactsService = async (userId: string) => {
  const contactRepo = AppDataSource.getRepository(Contact)

  const contacts = await contactRepo
    .createQueryBuilder('contacts')
    .where('contacts.userId = :id', { id: userId })
    .getMany()

  return contacts
}

export default listContactsService
