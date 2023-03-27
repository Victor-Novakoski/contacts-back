import { Request, Response } from 'express'
import { IUserUpdate } from '../../interfaces/users'
import createUserService from '../../services/users/createUserService'
import deleteUserService from '../../services/users/deleteUserService'
import { listProfileService } from '../../services/users/listUserProfile'
import listUsersService from '../../services/users/listUsersService'
import { patchUserService } from '../../services/users/patchUserService'

export const createUserController = async (req: Request, resp: Response) => {
  const newUser = await createUserService(req.body)
  return resp.status(201).json(newUser)
}

export const listUsersController = async (req: Request, resp: Response) => {
  const users = await listUsersService()
  return resp.json(users)
}

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const userId = request.user.id
  console.log(userId)
  await deleteUserService(userId)
  return response.status(204).send()
}

export const patchUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body
  const userId: string = req.user.id
  const patchedUser = await patchUserService(userId, userData)
  return res.json(patchedUser)
}

export const listProfileController = async (req: Request, resp: Response) => {
  const userProfile = await listProfileService(req.user.id)
  return resp.json(userProfile)
}
