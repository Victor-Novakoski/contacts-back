import { Router } from 'express'
import {
  addContactController,
  deleteContactController,
  listContactsController,
  patchContactController,
} from '../controllers/contact/contactController'
import ensureAuthMiddleware from '../middlewares/ensureAuthMiddleware'
import ensurePatchDataStructure from '../middlewares/ensurePatchDataStructureMiddleware'
import { verifySchemaMiddleware } from '../middlewares/ensureValidBodyMiddleware'
import {
  contactSerializer,
  contactUpdateSerializer,
} from '../schemas/contact/contactSchema'

const ContactRouter = Router()

ContactRouter.post(
  '',
  verifySchemaMiddleware(contactSerializer),
  ensureAuthMiddleware,
  addContactController
)
ContactRouter.get('', ensureAuthMiddleware, listContactsController)
ContactRouter.delete('/:id', ensureAuthMiddleware, deleteContactController)
ContactRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensurePatchDataStructure,
  verifySchemaMiddleware(contactUpdateSerializer),
  patchContactController
)

export default ContactRouter
