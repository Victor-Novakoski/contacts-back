import { Router } from 'express'
import { authController } from '../controllers/login/authController'
import { verifySchemaMiddleware } from '../middlewares/ensureValidBodyMiddleware'
import { authSchemaRequest } from '../schemas/auth/authSchema'

const authRouter = Router()

authRouter.post('', verifySchemaMiddleware(authSchemaRequest), authController)

export default authRouter
