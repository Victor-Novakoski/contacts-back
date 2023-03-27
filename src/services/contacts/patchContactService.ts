import AppDataSource from '../../data-source'
import Contact from '../../entities/contactEntity'
import { iContact, IcontactUpdate } from '../../interfaces/contact'

export const patchContactService = async (
  contactId: string,
  contactData: IcontactUpdate
): Promise<iContact> => {
  const userRepo = AppDataSource.getRepository(Contact)
  const contact = await userRepo.findOneBy({ id: contactId })

  if (contactData.name) {
    contact.name = contactData.name
  }
  if (contactData.email) {
    contact.email = contactData.email
  }
  if (contactData.phone) {
    contact.phone = contactData.phone
  }

  await userRepo.save(contact)

  return contact
}
