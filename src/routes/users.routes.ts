import { listProfileController } from './../controllers/user/UsersController'
import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  listUsersController,
  patchUserController,
} from '../controllers/user/UsersController'
import ensureAuthMiddleware from '../middlewares/ensureAuthMiddleware'
import ensurePatchDataStructure from '../middlewares/ensurePatchDataStructureMiddleware'
import { verifySchemaMiddleware } from '../middlewares/ensureValidBodyMiddleware'
import {
  userSerializer,
  userUpdateSerializer,
} from '../schemas/user/userSchema'

const usersRouter = Router()

usersRouter.post(
  '',
  verifySchemaMiddleware(userSerializer),
  createUserController
)
usersRouter.patch(
  '/profile',
  ensureAuthMiddleware,
  ensurePatchDataStructure,
  verifySchemaMiddleware(userUpdateSerializer),
  patchUserController
)
usersRouter.delete('/profile', ensureAuthMiddleware, deleteUserController)
usersRouter.get('', listUsersController)
usersRouter.get('/profile', ensureAuthMiddleware, listProfileController)

export default usersRouter
