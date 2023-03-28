import { Request, Response } from 'express'
import { IcontactUpdate } from '../../interfaces/contact'
import createContactService from '../../services/contacts/createContactService'
import deleteContactService from '../../services/contacts/deleteContactService'
import listContactsService from '../../services/contacts/listContactsService'
import { patchContactService } from '../../services/contacts/patchContactService'

export const addContactController = async (req: Request, res: Response) => {
  const data = await createContactService(req.user.id, req.body)
  return res.status(201).json(data)
}

export const listContactsController = async (req: Request, resp: Response) => {
  const users = await listContactsService(req.user.id)
  return resp.json(users)
}

export const deleteContactController = async (req: Request, resp: Response) => {
  const contactId = req.params.id
  await deleteContactService(contactId)
  return resp.status(204).send()
}

export const patchContactController = async (req: Request, res: Response) => {
  const contactData: IcontactUpdate = req.body
  const contactId: string = req.params.id
  const patchedUser = await patchContactService(contactId, contactData)
  return res.json(patchedUser)
}
